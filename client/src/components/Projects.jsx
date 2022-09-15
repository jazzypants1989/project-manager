import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../queries/projectQueries"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    const { data, loading, error } = useQuery(GET_PROJECTS)

    if (loading) return null
    if (error) return <p>What the heck!?</p>

  return (
    <>
        {
            data.projects.length > 0 ? (
                <div className="row mt-4">
                    { data.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (<p>No projects found</p>)
        }
    </>
  )
}
