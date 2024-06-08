import { useContext } from "react";
import PointsContext from "../../context/pointsContext";
import Navbar from "../common/Navbar/navbar";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

const Login = () => {
    const router = useNavigate();
    const { login } = useContext(PointsContext);
    const contextValues = useContext(PointsContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = async () => {
        if (!email && !password) {
            return;
        }
        fetch(`http://localhost:1400/api/auth/login`, {
            headers: {
                "Content-type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({ email, password })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            // console.log(data);
            if (data.status == "success") {
                console.log(data);
                localStorage.setItem('authorization', data.data.token);
                // router('/');
                navigate("/");
                window.location.reload()
                // contextValues.login
                // console.log(contextValues.login)
            }
        })
        // alert(" Logged in successfully")
        // if(data.status === "success"){
        //     localStorage.setItem("authorization", data.data.token);
        //     login();
        // }
    }

    return (
        <div >
            <Navbar page='login' />
            <div className="login-main-container">
                <div className="login">
                    <div className="heading">
                        <h1>Login</h1>
                    </div>
                    <div className="search">
                        <div>
                            <input className="name-password" placeholder="Enter your Email ID" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input className="name-password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <button className="login-btn" onClick={handleClick}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;