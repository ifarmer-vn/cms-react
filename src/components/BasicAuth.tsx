

import { useState } from "react";
import credentials from "../../credentials"; // Import credentials file

export default function BasicAuth({onAuthenticated}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(() => {
        return localStorage.getItem("authenticated") !== "true";
    });

    const handleLogin = () => {
        if (username === credentials.username && password === credentials.password) {
            localStorage.setItem("authenticated", "true");
            setMessage("Login successful");

            setIsOpen(false);
            onAuthenticated && onAuthenticated(); // Notify parent component
            setIsOpen(false);
        } else {
            setMessage("Login failed: Invalid username or password");
        }
    };

    return (
        <div className="p-4">
            {!isOpen && <p className="text-green-500">You are already authenticated</p>}

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Basic Authentication</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            className="border p-2 rounded w-full mb-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border p-2 rounded w-full mb-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex justify-end gap-2 mt-2">
                            <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                        {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}
