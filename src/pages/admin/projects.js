
import { useEffect, useState } from "@/lib";
import Header from "@/components/Header";
import search from "@/api/project";
const ProjectsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    useEffect(() => {

        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;

                const newProjects = data.filter((project) => project.id != id);
                setData(newProjects);



                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE",
                }).then();
            });
        }
    });
    useEffect(() => {
        const btnSearch = document.querySelector(".btn-search")
        const title = btnSearch.dataset.title
            btnSearch.addEventListener('click', () => {
                search(title).then(({ data }) => setProject(data))
            }, [])


    })
    return `<div>
     ${Header()}
        <h1 class="tw-mt-5 tw-mb-5">Management Page</h1>
        <div>
        
        </div>
        <a href="/admin/projects/search"><button class="btn btn-remove btn-danger">Search Project</button></a>
        <a href="/admin/projects/add"><button class="btn btn-remove btn-danger">Add New Project</button></a>
        <table class="table table-bordered tw-mt-4">
         <form action="" >
            <input type="text"  placeholder="Search">
            <button class="btn-search btn btn-remove btn-danger"  type="submit" >Search</button>
        </form><br>
            <thead>
                <tr>
                    <th>Stt</th>
                    <th>Project Title</th>
                    <th>Project Content</th>
                    <th>Project Image</th>
                    <th>Project Url</th>
                    <th>Project Responsitory</th>
                </tr>
            </thead>
        <tbody>
            ${data
            .map(
                (project, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${project.title}</td>
                    <td>${project.content}</td>
                    <td>${project.image}</td>
                    <td>${project.url}</td>
                    <td>${project.responsitory}</td>
                    <td>
                        <button data-id="${project.id
                    }" class="btn btn-remove btn-danger">Remove</button>
                        <a href="/admin/projects/${project.id}/edit"  class="btn btn-remove btn-danger">Sửa</a>
                    </td>
                </tr>
            `
            )
            .join("")}
            
        </tbody>
    </div>`;
    
};

export default ProjectsPage;


