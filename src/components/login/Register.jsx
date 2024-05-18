import { useState } from "react";
import { useRegister } from "../../shared/hooks";
import {
    validatePassword,
    validatePasswordMessage,
    validateUsername,
    validateUsernameMessage,
    validateConfirmPassword,
    validateConfirmationMessage,
    validateUserEmail,
    validateUserEmailMessage,
    validateName,
    validateNameMessage,
} from "../../shared/validator";
import { Input } from "../Input";

import './login.css';

export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister();
    const [formState, setFormState] = useState({
        name: {
            value: "",
            isValid: false,
            showError: false,
        },
        username: {
            value: "",
            isValid: false,
            showError: false,
        },
        userEmail: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
        confirmPassword: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            }
        }));
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
            case "confirmPassword":
                isValid = validateConfirmPassword(value, formState.password.value);
                break;
            case "userEmail":
                isValid = validateUserEmail(value);
                break;
            case "name":
                isValid = validateName(value);
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

    const handleRegister = (event) => {
        event.preventDefault();
        useRegisterRequest(formState.name.value, formState.username.value, formState.userEmail.value, formState.password.value);
    }

    const isSubmitButtonDisabled = isLoading || !formState.user.isValid || !formState.password.isValid || !formState.confirmPassword.isValid || !formState.userEmail.isValid || !formState.name.isValid;

    return (
        <div className="content">
            <div className="form-control">
                <h1>REGISTER</h1>
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
                        field='name'
                        label='Name'
                        value={formState.name.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.name.showError}
                        validationMessage={validateNameMessage} />
                    <Input field='userEmail'
                        label='Email'
                        value={formState.userEmail.value}   
                        onChangeHandler={handleInputValueChange}    
                        type='email'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.userEmail.showError}
                        validationMessage={validateUserEmailMessage} />
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
                    <Input
                        field='confirmPassword'
                        label='Confirm Password'
                        value={formState.confirmPassword.value}
                        onChangeHandler={handleInputValueChange}
                        type='password'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.confirmPassword.showError}
                        validationMessage={validateConfirmationMessage} />
                </form>
                <button className="btn-register" onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    REGISTER
                </button>
                <span onClick={switchAuthHandler} className="btn-login">
                    Login Here
                </span>
            </div>
        </div>
    )
}