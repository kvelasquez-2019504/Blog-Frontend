import toast from "react-hot-toast";
import { addComment as addCommentRequest } from "../../services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useComment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const addComment = async (idPublication, comment) => {
        setIsLoading(true)
        const response = await addCommentRequest( {idPublication,comment });
        console.log(response.data)
        console.log('Use add comment',idPublication, comment);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'no se pudo publicar'
            )
        }
        navigate(`/publications/${idPublication}`)
        setIsLoading(false)
    }
    return {
        addComment,
        isLoading
    }
}
