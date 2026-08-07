import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    let user = null;

    try {
        const storedUser = localStorage.getItem("user");

        if (storedUser && storedUser !== "undefined") {
            user = JSON.parse(storedUser);
        }
    } catch (error) {
        console.error(error);
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
    };

    return (
        <header className="bg-white shadow flex justify-between items-center p-5">

            <h2 className="text-2xl font-semibold">
                Dashboard
            </h2>

            <div className="flex items-center gap-4">

                <span>
                    Welcome, <strong>{user?.name || "User"}</strong>
                </span>

                <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>

            </div>

        </header>
    );
}

export default Navbar;