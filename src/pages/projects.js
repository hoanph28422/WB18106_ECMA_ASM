import { useEffect, useState } from "@/lib";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    return `
    <div class="text-center">
    ${Header()}
        <h1 class="tw-mt-5 tw-mb-5">Projects Page</h1>
        <div >${ProjectList({ projects })}</div>
    </div>
        
    `;
};
export default ProjectsPage;
