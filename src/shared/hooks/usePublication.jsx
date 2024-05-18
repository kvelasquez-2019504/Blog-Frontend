import toast from "react-hot-toast";
import {
    getPublications as getPublicationsRequest, getPublicationById as getPublicationByIdRequest,

} from "../../services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePublications = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [publications, setPublications] = useState([]);
    const [publicationsById, setPublicationsById] = useState({publicacion:"",cantidadComentarios:0,comentarios:[]});
    const navigate = useNavigate();

    const getPublications = async () => {
        setIsLoading(true);

        const response = await getPublicationsRequest();
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Error al obtener publicaciones'
            );
        }
        setIsLoading(false);
        setPublications(response.data.myPublications);
    }

    const getPublicationById = async (idPublication) => {
        setIsLoading(true);

        try {
            const response = await getPublicationByIdRequest({ idPublication });
            
            if (response.error) {
                return toast.error(
                    response.e?.response?.data || 'Error al obtener la publicacion'
                )
            }
            publicationsById.comentarios = response.data.comments;
            publicationsById.publicacion = response.data.publication;
            publicationsById.cantidadComentarios = response.data.countComments;
            setIsLoading(false);
            navigate(`/publications/${idPublication}`);
        } catch (error) {
            setIsLoading(false);
            return toast.error('Error al obtener la publicacion por un trycat');
        }
    }
    return {
        getPublications,
        getPublicationById,
        publicaciones: publications,
        publicacionesById: publicationsById,
        isLoading
    }
}