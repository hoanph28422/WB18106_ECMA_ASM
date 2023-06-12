import {router, useEffect } from "@/lib";
import Header from "@/components/Header";
const signin =()=>{
    useEffect(()=>{
        const form = document.querySelector('form');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const signin={
                "username": document.querySelector("#username").value,
                "password": document.querySelector("#password").value,
            }
            if (!username || !password) {
                alert('Vui lòng điền đầy đủ thông tin.');
                return;
            }

            fetch('http://localhost:3000/users')
                .then(response => response.json())
                .then(data => {
                    const users = data.users;
                    if (users && Array.isArray(users)) {
                        const user = users.find(user => user.username === username);
                        if (!user) {
                            alert('Tài khoản không tồn tại.');
                            return;
                        }
                        if (user.password !== password) {
                            alert('Mật khẩu không đúng.');
                            return;
                        }

                        alert('Đăng nhập thành công.');
                        router.navigate('/');
                    } else {
                        alert('Dữ liệu người dùng không hợp lệ.');
                    }
                });
           
        });
    },[])
    return`
     ${Header()}
     <h3 >Đăng Nhập</h3><br>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Username"><br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password"><br><br>

            <button class="btn btn-remove btn-danger" type="submit">Signin</button>
</form>
    `

}
export default signin