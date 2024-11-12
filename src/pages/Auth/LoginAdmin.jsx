import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../redux/api/authApiCall";


const LoginPageAdmin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const success = useSelector((state) => state.auth.success);

    const submitHandler = async (e) => {
        e.preventDefault();

        const user = { email: email, password: password };
        dispatch(loginAdmin(user));
    }

    useEffect(() => {
        if (success) {
            navigate("/admin");
        }
    }, [success, navigate]);


    return (
        <div class="flex justify-center items-center h-screen bg-gray-800">
            <form onSubmit={submitHandler} class="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i> Login</h1>
                <hr class="mt-3" />
                <div class="mt-3">
                    <label for="email" class="block text-base mb-2">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
                </div>
                <div class="mt-3">
                    <label for="password" class="block text-base mb-2">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
                </div>
                <div class="mt-3 flex justify-between items-center">
                    <div>
                        <a href="#" class="text-gray-800 font-semibold">Forgot Password?</a>
                    </div>
                </div>
                <div class="mt-5">
                    <button type="submit" class="border-2 border-gray-800 bg-gray-800 text-white py-1 w-full rounded-md hover:bg-gray-700 hover:text-gray-700 font-semibold">
                        <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginPageAdmin;