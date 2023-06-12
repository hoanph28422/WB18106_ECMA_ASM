import { router, useEffect } from "@/lib";
import Header from "@/components/Header";
// import { projects } from "../../data";
const ProjectAdd = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newProject = {
                "title": document.querySelector("#title").value,
                "content": document.querySelector("#content").value
            }
            fetch(`http://localhost:3000/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProject)
            }).then(() => {
                router.navigate('/admin/projects')
            })
        })


    })
    return /*html*/`
     ${Header()}
        <form class="table table-bordered" action="" id="add-form">
            <input type="text" placeholder="Project title" id="title"/><br><br>
            <input type="text" placeholder="Project content" id="content"/><br><br>
            <button class="btn btn-remove btn-danger">Add New Project</button>
        </form>
    `
}

export default ProjectAdd;
