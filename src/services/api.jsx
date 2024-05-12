import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:300/Blog/v1',
    timeout: 1000,
});


export const getPosts = async () => {
    try {
        return await apiClient.get('/posts');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

