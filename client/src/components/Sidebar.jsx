import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">

            <h1 className="text-3xl font-bold mb-10">
                ForgeOps
            </h1>

            <nav className="flex flex-col gap-4">

                <Link
                    to="/dashboard"
                    className="hover:bg-slate-700 rounded-lg p-3"
                >
                    Dashboard
                </Link>

                <Link
                    to="/projects"
                    className="hover:bg-slate-700 rounded-lg p-3"
                >
                    Projects
                </Link>

                <Link
                    to="/issues"
                    className="hover:bg-slate-700 rounded-lg p-3"
                >
                    Issues
                </Link>

            </nav>

        </aside>
    );
}

export default Sidebar;