import { useEffect, useState } from "@/lib";
import Header from "@/components/Header";

const ProjectDetailPage = ({ id }) => {
    // const currentProject = projects.find((project) => project.id == id);
    // if (!currentProject) return "";

    const [project, setProject] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/projects/" + id)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);

    return `
        ${Header()}
            <h1>${project.tiltle}</h1>
        `;
};
export default ProjectDetailPage;
