import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../api/api";


const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(token, { password });
            setMessage("Password reset successful");
            setError("");
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            setError(err.response?.data?.message || "Failed");
            setMessage("");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-100 to-gray-200 px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform hover:scale-105 transition-all duration-300">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Reset Password
                </h2>

                {message && (
                    <div className="bg-green-100 text-green-800 p-3 rounded mb-4 text-center font-medium">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="bg-red-100 text-red-800 p-3 rounded mb-4 text-center font-medium">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg transition"
                    >
                        Reset Password
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-500 text-sm">
                    Remember your password?{" "}
                    <a
                        href="/login"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ResetPassword;
