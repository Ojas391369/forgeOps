import api from "./api";

export const getProjects = async () => {
    const response = await api.get("/projects", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    return response.data;
};