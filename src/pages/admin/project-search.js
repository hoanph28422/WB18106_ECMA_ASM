import { router, useEffect } from "@/lib";
import Header from "@/components/Header";
const ProjectSearch = () => {
    useEffect(() => {
        const form = document.querySelector("#form-search");
        const title = document.querySelector("#title");
        const resultContainer = document.querySelector("#result-container");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = {
                "title": title.value,
            };

            fetch(`http://localhost:3000/projects?title=${formData.title}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    resultContainer.innerHTML = "";

                    data.forEach((project) => {
                        const projectElement = document.createElement("div");
                        projectElement.innerHTML = `
              <h2>${project.title}</h2>
              <p>${project.content}</p>
            `;
                        resultContainer.appendChild(projectElement);
                    });
                })
                .catch((error) => console.error(error));
        });
    }, []);

    return `
    <div>
     ${Header()}
      <form class="table table-bordered" id="form-search">
        <input type="text" id="title" class="border" placeholder="Project title" />
        <button class="btn btn-primary" >Search</button>
      </form>
      <div id="result-container"></div>
    </div>
  `;
};

export default ProjectSearch;