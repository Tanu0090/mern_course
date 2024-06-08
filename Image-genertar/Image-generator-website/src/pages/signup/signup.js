import Navbar from "../common/Navbar/navbar";
import { useState } from "react";
import "./signup.css"
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        if (!email && !password) {
            return;
        }
        try {
            fetch(`http://localhost:1400/api/auth/signup`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify({ email, password })
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
            })
        } catch {
            console.log("error");
        }
        alert("Account successfully created")
        // const data = await res.json();
        // console.log(data);
    }

    return (
        <div>
            <Navbar page='signup' />
            <div className="signup-main-container">
                <div className="signup">
                    <div className="heading">
                        <h1>Create Account</h1>
                    </div>
                    <div className="search">
                        <div>
                            <input className="name-password" placeholder="Enter your Email ID" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input className="name-password" placeholder="Create password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <button className="signin-btn" onClick={handleClick} >Signup</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;