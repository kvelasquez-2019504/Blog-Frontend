import { useState } from "react";
import { useLogin } from "../../shared/hooks";
import {
    validatePassword,
    validatePasswordMessage,
    validateUsername,
    validateUsernameMessage
} from "../../shared/validator";
import { Input } from "../Input";

import './login.css';

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        user: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            }
        })

        );
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "user":
                isValid = validateUsername(value);
                break;
            case "password":
                isValid = validatePassword(value);
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
            },
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        login(formState.user.value, formState.password.value);
    }

    const isSubmitButtonDisabled = isLoading || !formState.user.isValid || !formState.password.isValid;

    return (
        <div className="content">
            <div className="form-control">
                <h1>LOGIN</h1>
                <form className="">
                    <Input
                        field='user'
                        label='Username'
                        value={formState.user.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.user.showError}
                        validationMessage={validateUsernameMessage}
                    />
                    <Input
                        field='password'
                        label='Password'
                        value={formState.password.value}
                        onChangeHandler={handleInputValueChange}
                        type='password'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.password.showError}
                        validationMessage={validatePasswordMessage}
                    />
                    <button className="btn-login" onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                        LOG IN
                    </button>
                </form>
                <span onClick={switchAuthHandler} className="btn-register">
                    Registrate Aqui
                </span>
            </div>
        </div>
    )
}
