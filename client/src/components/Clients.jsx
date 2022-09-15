import { gql, useQuery } from '@apollo/client'
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientQueries';
import spinner from './spinner';

export default function Clients() {
    const { data, loading, error } = useQuery(GET_CLIENTS)

    if (loading) return spinner();;
    if (error) return <p>What the heck!?</p>;

    return <>{!loading && !error && (
        <table className='table table-hover mt-3'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.clients.map(client => (
                <ClientRow key={client.id} client={client} />
                ))}
            </tbody>
        </table>    
    )}</>;
}
