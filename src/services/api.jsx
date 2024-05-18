import axios from "axios";
//npm run dev -- --host 0.0.0.0 sirve para exponer el servidor en la red local
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/Blog/v1',
    timeout: 1000,
});

apiClient.interceptors.request.use(
    (config)=>{
        const useUserDetails = localStorage.getItem('user');
        if(useUserDetails){
            const token = JSON.parse(useUserDetails).token;
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (e)=>{
        return Promise.reject(e)
    }
)

export const getPublications = async () => {
    try {
        return await apiClient.get('/publications');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const addComment = async(data)=>{
    try {
        return await apiClient.post(`/comments/`,data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getPublicationById = async ({idPublication}) => {
    console.log('esto es api get id',idPublication)
    try {
        return await apiClient.get(`/publications/${idPublication}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}


const register = async (name, username, userEmail, password) => {
    try {
        const response = await axios.post('/api/register', {
            name,
            username,
            email: userEmail,
            password
        });

        // Aquí puedes manejar la respuesta, por ejemplo, guardar el token en el almacenamiento local
        localStorage.setItem('token', response.data.token);
        return { success: true };
    } catch (e) {
        console.error(e);
        return {
            error: true,
            e
        }
    }
}