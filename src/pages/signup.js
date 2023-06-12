import { router, useEffect } from "@/lib";
import Header from "@/components/Header";
const Signup = () => {
    useEffect(() => {
        const form = document.querySelector("#add-form")

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const signup = {
                "username": document.querySelector("#username").value,
                "password": document.querySelector("#password").value,
                "confirm_password": document.querySelector("#confirm_password").value
            }

            if (!signup.username || !signup.password || !signup.confirm_password) {
                alert('Vui lòng điền đầy đủ thông tin.');
                return;
            }


            if (signup.password !== signup.confirm_password) {
                alert('Password và Confirm Password không khớp.');
                return;
            }

            fetch(`http://localhost:3000/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signup)
            }).then(() => {
                router.navigate('/signin')
            })

        });

    })
    return `
     ${Header()}
     <h3>Đăng ký</h3>
        <form id="add-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Username"><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password"><br>

            <label for="confirm_password">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm-password" placeholder="Confirm Password"><br>

            <button class="btn btn-remove btn-danger" type="submit">Signup</button>
        </form>
    `
}
export default Signup