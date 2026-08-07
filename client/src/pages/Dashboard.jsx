import { useEffect, useState } from "react";
import {
    FolderKanban,
    Bug,
    Flame,
    Activity,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import { getDashboard } from "../services/dashboard.service";

function Dashboard() {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const res = await getDashboard();

                setDashboard(res.data);

            } catch (err) {

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        loadDashboard();

    }, []);

    if (loading) {

        return (
            <MainLayout>

                <h1 className="text-3xl font-bold">
                    Loading Dashboard...
                </h1>

            </MainLayout>
        );

    }

    return (

        <MainLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold">

                    Good Evening 👋

                </h1>

                <p className="text-slate-500 mt-2">

                    Welcome back to ForgeOps

                </p>

            </div>

            <div className="grid grid-cols-4 gap-6">

                <StatCard
                    icon={<FolderKanban size={28} />}
                    title="Projects"
                    value={dashboard.totalProjects}
                    color="bg-blue-500"
                />

                <StatCard
                    icon={<Bug size={28} />}
                    title="Issues"
                    value={dashboard.totalIssues}
                    color="bg-green-500"
                />

                <StatCard
                    icon={<Flame size={28} />}
                    title="Critical"
                    value={dashboard.critical}
                    color="bg-red-500"
                />

                <StatCard
                    icon={<Activity size={28} />}
                    title="Progress"
                    value={`${Math.round(
                        dashboard.totalIssues === 0
                            ? 0
                            : (dashboard.done /
                                  dashboard.totalIssues) *
                                  100
                    )}%`}
                    color="bg-purple-500"
                />

            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-2xl font-bold mb-5">

                        Recent Projects

                    </h2>

                    {

                        dashboard.recentProjects.map(project => (

                            <div
                                key={project.id}
                                className="border-b py-4"
                            >

                                <h3 className="font-semibold">

                                    🚀 {project.name}

                                </h3>

                                <p className="text-slate-500">

                                    {project.description}

                                </p>

                            </div>

                        ))

                    }

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-2xl font-bold mb-5">

                        Recent Issues

                    </h2>

                    {

                        dashboard.recentIssues.map(issue => (

                            <div
                                key={issue.id}
                                className="border-b py-4"
                            >

                                <h3 className="font-semibold">

                                    {issue.title}

                                </h3>

                                <div className="flex gap-3 mt-2">

                                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">

                                        {issue.priority}

                                    </span>

                                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">

                                        {issue.status}

                                    </span>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </MainLayout>

    );

}

function StatCard({

    icon,

    title,

    value,

    color,

}) {

    return (

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">

            <div className="flex justify-between">

                <div>

                    <p className="text-slate-500">

                        {title}

                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        {value}

                    </h2>

                </div>

                <div
                    className={`${color} text-white p-3 rounded-xl h-fit`}
                >

                    {icon}

                </div>

            </div>

        </div>

    );

}

export default Dashboard;