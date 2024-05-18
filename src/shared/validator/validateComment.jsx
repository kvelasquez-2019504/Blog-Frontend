export const validateComment =(comment)=>{
    return comment.length>=10 && comment.length<=200;
}
export const descriptionValidateMessage='El comentario debe ser mayor a 10 caracteres y menor a 200'