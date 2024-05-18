export const validateUserEmail=(userEmail)=>{
    const regex = /\S+@\S+\.\S+/;
    return regex.test(userEmail);
}

export const validateUserEmailMessage='El correo es invalido'