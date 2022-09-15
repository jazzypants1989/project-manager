import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client"
import { GET_PROJECT } from "../queries/projectQueries"
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

export default function Project() {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_PROJECT, 
        { variables: { id } });

    if (loading) return <Spinner />
    if (error) return <p>What the heck!?</p>

  return (
    <>
     { !loading && !error && (
        <div className="mx-auto w-75 card p-5">
            <h1 className="text-center"> {data.project.name} </h1>
            <p className="text-center mt-1"> {data.project.description} </p>

            <div className="d-flex justify-content-flex-start align-items-center">
                <p className="small">Status: <strong>{ data.project.status }</strong></p>
            </div>

            <ClientInfo client={data.project.client} />

            <EditProjectForm project={data.project} />

            <DeleteProjectButton projectId={data.project.id} />

            <Link to="/" className="btn btn-sm btn-primary mb-3">
                Back to the projects list
            </Link>
        </div>
            )}
    </>
  )
}