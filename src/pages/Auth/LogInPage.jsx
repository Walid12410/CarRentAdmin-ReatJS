import "./login-css.css";
import React, { useState } from "react";


const LogInPage = () => {

    const [activeForm, setActiveForm] = useState("admin");

    return (
        <div className="hero">
            <div className="form-box">
                <div className="button-box">
                    <div className={`btn ${activeForm === "employee" ? "move-right" : ""}`}></div>
                    <button type="button" className="toggle-btn"
                        onClick={() => setActiveForm("admin")}>Admin</button>
                    <button type="button" className="toggle-btn"
                        onClick={() => setActiveForm("employee")}>Employee</button>
                </div>
                {activeForm === "admin" && (
                    <form id="admin" className="input-group">
                        <input type="text" className="input-field" placeholder="Email" required />
                        <input type="text" className="input-field" placeholder="Password" required />
                        <button className="submit-btn">Sign In as Admin</button>
                    </form>
                )}
                {activeForm === "employee" && (
                    <form id="employee" className="input-group">
                        <input type="text" className="input-field" placeholder="Email" required />
                        <input type="text" className="input-field" placeholder="Password" required />
                        <button className="submit-btn">Sign In as Employee</button>
                    </form>
                )}

            </div>
        </div>
    );
}

export default LogInPage;