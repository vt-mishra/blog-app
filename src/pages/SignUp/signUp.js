import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const navigateTo = (path) => {
      navigate(path);
    };
    const handleSubmit = () => {
        try {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert("SignUp Done Successfully");
            navigateTo("/")
            setError("");
        } catch (err) {
            setError("Oops, incorrect credentials.");
        }
    }
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="form">
                    <h1 className="title text-center m-4">
                       Sign Up Page<br />
                        {/* <span className="myName">
                            Created By <span className="creator">Vatan Mishra</span>
                        </span> */}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input"
                            placeholder="Username"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                            placeholder="Password"
                            required
                        />
                        <div align="center">
                            <button type="submit" className="button">
                                <span >Sign Up</span>
                            </button>
                        </div>
                        <div> <h2 className='mt-5'>Already have an Account</h2> <Link to="/">
                            <div className="item-card">
                                <label className='m-2 ms-3'> Click On Sign In</label>
                            </div>
                        </Link></div>
                    </form>
                    <h1>{error}</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignUp