import instance from "./instance"

const search = (project) => {
    return instance.get(`projects/${project.title}`, project)
}

export default search