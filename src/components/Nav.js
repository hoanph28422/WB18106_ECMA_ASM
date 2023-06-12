import { menus } from "../data";
const Nav = () => {
    return `
        <nav>
            ${menus.map((menu) => `<a href="${menu.link}"  class="tw-px-3 tw-no-underline">${menu.name}</a>`).join("")}
        </nav>
    `;
};
export default Nav;
