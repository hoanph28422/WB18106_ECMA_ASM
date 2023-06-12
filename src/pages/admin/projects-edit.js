import { router, useEffect, useState } from "@/lib";
import joi from "joi";
import Header from "@/components/Header";
const projectSchema = joi.object({
    title: joi.string().required().min(3).max(30),
    content: joi.string().required().min(3).max(255),
    image: joi.string().required(),
    url: joi.string().uri().required(),
    responsitory: joi.string().uri().required(),
});
const ProjectEdit = ({ id }) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
            });
    }, []);

    useEffect(() => {
        const formAddProject = document.querySelector("#update-form");
        const errorsElement = document.querySelector("#errors");
        if (!formAddProject) return;

        formAddProject.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = {
                title: document.querySelector("#title").value,
                content: document.querySelector("#content").value,
                image: document.querySelector("#image").value,
                url: document.querySelector("#url").value,
                responsitory: document.querySelector("#responsitory").value,
            };
            const { error } = projectSchema.validate(formData, { abortEarly: false });
            if (error) {
                const errors = error.details.map((err) => err.message);
                errorsElement.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
                return;
            }
            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => {
                alert("Bạn đã cập nhật thành công");
            });
        });
    });
    return `
     ${Header()}
    <div id="errors"></div>
        <form class="table table-bordered" action="" id="update-form" class="">
            Title:  <input type="text" id="title" class="border" value="${project.title}" placeholder="Project title" /><br><br>
            Content:  <input type="text" id="content" class="border" value="${project.content}"placeholder="Project content" /><br><br>
            Image:  <input type="text" id="image" class="border" value="${project.image}" placeholder="Project image" /> <br><br>
            Url:  <input type="text" id="url" class="border" value="${project.url}"placeholder="Project url" /> <br><br>
            Responsitory:  <input type="text" id="responsitory" class="border" value="${project.responsitory}"placeholder="Project respository" /> <br><br>
            <button class="btn btn-primary">Sửa</button>
        </form>
    `
}


export default ProjectEdit;
