import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { render, router } from "./src/lib";

import HomePage from "./src/pages/home";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";
import AdminProjectPage from "./src/pages/admin/projects";
import AdminProjectAddPage from "./src/pages/admin/projects-add";
import ProjectEdit from "./src/pages/admin/projects-edit";
import ProjectSearch from "@/pages/admin/project-search";
import Signup from "./src/pages/signup";
import signin from "@/pages/signin";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data }) => render(() => ProjectDetailPage(data), app));
router.on("/signup",()=>render(Signup,app));
router.on("/signin",()=>render(signin,app))

router.on("/admin/projects", () => render(AdminProjectPage, app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app));
router.on("/admin/projects/search",()=> render(ProjectSearch,app))
router.on("/admin/projects/:id/edit", ({ data }) => render(() => ProjectEdit(data), app));

router.notFound((""),() => render(NotFoundPage),app );

router.resolve();
