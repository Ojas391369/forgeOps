import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth.service";

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await loginUser(form);

            console.log("Login Response:", res);
            console.log(res);

            // Store JWT
            localStorage.setItem("token", res.token);

            // Store User
            localStorage.setItem(
                "user",
                JSON.stringify(res.data)
            );

            navigate("/dashboard");
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-xl p-8 w-[400px]"
            >
                <h1 className="text-3xl font-bold text-center mb-8">
                    ForgeOps Login
                </h1>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 mb-4"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 mb-6"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white rounded-lg py-3"
                >
                    {loading ? "Logging In..." : "Login"}
                </button>
            </form>

        </div>
    );
}

export default Login;