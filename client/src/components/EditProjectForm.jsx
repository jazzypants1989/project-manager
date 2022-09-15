import { useState } from "react"
import { useMutation } from "@apollo/client"
import { UPDATE_PROJECT } from "../mutations/projectMutations"
import { GET_PROJECT } from "../queries/projectQueries" 

export default function EditProjectForm( { project } ) {
    const [name, setName] = useState(project.name)
    const [description, setDescription] = useState(project.description)
    const [status, setStatus] = useState(() => {
        switch (project.status) {
            case 'You are literally doing it right now':
                return 'working';
            case 'Waiting on your lazy butt':
                return 'new';
            case 'Donezo, my friend':
                return 'completed';
            default:
                throw new Error(`Unknown Status: ${project.status}`);
    }
    });

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: { id: project.id, name, description, status },
        refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }]
    });

    const onSubmit = (e) => {
        e.preventDefault()

        if (name === '' || description === '' || status === '') {
            return alert('Please fill in all fields')
        }

        updateProject(name, description, status)
        
        setName('')
        setDescription('')
        setStatus('')
    }

  return (
    <div className="m-1">
        <h4>New Deetz:</h4>
        <form onSubmit= { onSubmit }>
            <div className="form-group">
            <div className='mb-3'>
                  <label className='form-label'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Description</label>
                  <textarea
                    className='form-control'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Status</label>
                    <select id="status" 
                            className="form-select" 
                            value={status} 
                            onChange={(e) => setStatus(e.target.value)}>
                        <option value="new">Just kidding, I haven't even started yet.</option>
                        <option value="working">I forgot to put it in here but I'm already like half done</option>
                        <option value="completed">I did this SO LONG AGO!</option>
                    </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
    </div>
  )
}