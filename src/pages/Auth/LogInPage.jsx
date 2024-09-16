import { useDispatch, useSelector } from "react-redux";
import "./login-css.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../redux/api/authApiCall";


const LogInPage = () => {

    const [adminEmail , setAdminEmail] = useState("");
    const [adminPassword , setAdminPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [activeForm, setActiveForm] = useState("admin");


    const success = useSelector((state)=> state.auth.success);

    const submitHandler = async(e)=>{
        e.preventDefault();

        const user = {email : adminEmail ,password: adminPassword};
        dispatch(loginAdmin(user));
    }

    useEffect(()=> {
        if(success){
            navigate("/admin");
        }
    },[success , navigate]);


    return (
        <div className="hero-login">
            <div className="form-box-login">
                <div className="button-box-switch">
                    <div className={`btn-loginAdminEmployee ${activeForm === "employee" ? "move-right-login" : ""}`}></div>
                    <button type="button" className="toggle-btn-login"
                        onClick={() => setActiveForm("admin")}>Admin</button>
                    <button type="button" className="toggle-btn-login"
                        onClick={() => setActiveForm("employee")}>Employee</button>
                </div>
                {activeForm === "admin" && (
                    <form onSubmit={submitHandler} id="admin" className="input-group-login">
                        <input value={adminEmail}
                        onChange={(e)=> setAdminEmail(e.target.value)}
                        type="email" className="input-field-login" placeholder="Email" required />
                        <input value={adminPassword} 
                        onChange={(e)=> setAdminPassword(e.target.value)}
                        type="password" className="input-field-login" placeholder="Password" required />
                        <button className="submit-btn-login">Sign In as Admin</button>
                    </form>
                )}
                {activeForm === "employee" && (
                    <form id="employee" className="input-group-login">
                        <input type="text" className="input-field-login" placeholder="Email" required />
                        <input type="text" className="input-field-login" placeholder="Password" required />
                        <button className="submit-btn-login">Sign In as Employee</button>
                    </form>
                )}

            </div>
        </div>
    );
}

export default LogInPage;