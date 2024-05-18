import { useEffect, useState } from "react";
import { usePublications } from "../../shared/hooks";
import { useParams } from "react-router-dom";
import {
    validateComment,
    descriptionValidateMessage
} from "../../shared/validator/";
import { Navbar } from "../Navbars/Navbar";
import { Comment } from "./Comment";
import "./publication.css";
import "./comment.css";
import { Input } from "../Input";
import { useComment } from "../../shared/hooks/useComment";

export const Publication = () => {
    const { isLoading, publicacionesById, getPublicationById } = usePublications();
    const { addComment}=useComment();
    const [comment, setComment]=useState(false);
    const[btnComment,setBtnComment]=useState(false);

    const [menuAddComment, setAddComment] = useState({
        comment: {
            type: 'text',
            value: '',
            isValid: false
        }
    });
    const { idPublication } = useParams();

    useEffect(() => {
        getPublicationById(idPublication);
    }, [idPublication]);

    const handleInputValueChange = (value, field) => {
        setAddComment((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'comment':
                isValid = validateComment(value)
                break;
            default:
                break;
        }
        setAddComment((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleInputComment =(event)=>{
        event.preventDefault();
        if(btnComment){
            setBtnComment(!btnComment);
            document.getElementById('btn-comment-add').textContent='COMENTAR';
            console.log(idPublication, menuAddComment.comment.value)
            addComment(idPublication, menuAddComment.comment.value)
            menuAddComment.comment.value='';
            getPublicationById(idPublication);
        }else{
            document.getElementById('btn-comment-add').textContent='GUARDAR'
            setBtnComment(!btnComment);
        }
        setComment(!comment)
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="publication-container" >
                {getPublicationById ? (
                    <div>
                        <h1 className="title">{publicacionesById.publicacion.title}</h1>
                        <div className="info">
                            <span>Publicado el: <b>{publicacionesById.publicacion.date}</b>
                            </span>por: <span><b> {publicacionesById.publicacion.user}</b></span>
                        </div>
                        <div className="description">
                            <p>{publicacionesById.publicacion.mainText}</p>
                            <a href={publicacionesById.publicacion.link.toString()} target="_blank"> {"LINK>>"} </a>
                        </div>
                        <div className="tags">
                            <b>Categories:</b>
                            <span className="category">#{publicacionesById.publicacion.category}</span>
                        </div>
                    </div>
                ) : (<div>NO HAY PUBLICACIONES AÚN...</div>)
                }
                <div>
                    {publicacionesById.comentarios ? (
                        <div className="">
                            <div className="comment-add">
                                <button className="btn-addComment" onClick={handleInputComment} id="btn-comment-add">COMENTAR</button>
                                {comment ? (
                                    <Input
                                        field='comment'
                                        label=''
                                        value={menuAddComment.comment.value}
                                        onChangeHandler={handleInputValueChange}
                                        type={menuAddComment.comment.type}
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={menuAddComment.comment.showError}
                                        validationMessage={descriptionValidateMessage}
                                    />):(
                                        <div></div>
                                    )
                                }
                            </div>
                            <div>
                                {
                                    publicacionesById.comentarios.map((comment) => (
                                        <Comment
                                            key={comment.idComment}
                                            id={comment.idComment}
                                            uid={comment.idUser}
                                            name={comment.name}
                                            comment={comment.comment}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    ) : (<div> NO HAY COMENTARIOS AÚN...</div>)
                    }
                </div>
            </div>
        </div>
    )
}
