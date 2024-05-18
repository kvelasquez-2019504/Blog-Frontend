import { useState } from "react";
import { validateComment } from "../../shared/validator/validateComment";
import "./comment.css";
import { useUserDetails } from "../../shared/hooks/useUserDetails";

export const Comment = ({ comment, name, id, uid }) => {
    const { idUser } = useUserDetails();

    const [isInputDisabled, setInputDisabled] = useState(true);
    const [formState, setFormState] = useState({
        comment: {
            showError: false,
            value: 'comment',
            isValid: validateComment(comment),
            disabled: true
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
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
                isValid = comment(value)
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setFormState({
            comment: formState.comment
        })
    }

    const handleFormActive = (event) => {
        event.preventDefault();
        setInputDisabled(!isInputDisabled); // toggle the disabled state
    }

    const isSubmitButtonDisabled = !formState.comment.isValid || !formState.comment.value;

    return (
        <div className="comment">
            <div className="card-comment" >
                <div className="card-header">
                    <h5>{name}</h5>
                    <input id="comment" type="text" defaultValue={comment} disabled={isInputDisabled} />
                </div>
                {uid === idUser ? (<section className="options">
                    <p><a>eliminar</a></p>
                </section>) : (<></>)
                }
            </div>
        </div>
    )
}
