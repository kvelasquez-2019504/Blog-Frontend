export const validateName=(name)=>{
    const regex = /^\S{10,250}$/;
    return regex.test(name);
}

export const validateNameMessage='El nombre debe contener entre 10 y 250 caracteres'