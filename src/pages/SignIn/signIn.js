import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './sign.css';


const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const navigateTo = (path) => {
      navigate(path);
    };
    const handleSubmit = () => {
           let user = localStorage.getItem("username");
           let pass = localStorage.getItem("password");
           console.log(user, password);
           if(user == username && pass == password){
            alert("Login Done Successfully");
            navigateTo("/home");
           }
            // navigateTo("/home");
 
    }
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="form">
                    <h1 className="title text-center mt-5 mb-5">
                        Blog Application <br />
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
                                <span>Start Blog</span>
                            </button>
                        </div>
                        <div className='title1 m-5'> <h2>New User</h2> <Link to="/signup">
                            <div className="item-card">
                                <label className="ms-3 m-2"> Click On Sign UP</label>
                            </div>
                        </Link></div>
                    </form>
                    <h1>{error}</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignIn