import api from "./api";

export const getIssues = async () => {
    const response = await api.get("/issues", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    return response.data;
};