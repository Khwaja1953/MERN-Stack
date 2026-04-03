import axios from "axios";

const Backend_url = import.meta.env.BACKEND_URL;
export async function Get(url) {
    try {
        const response = await axios.get(`${Backend_url}${url}`);
        // console.log(response);
        return response.blogs;
    } catch (error) {
        return error
    }
}