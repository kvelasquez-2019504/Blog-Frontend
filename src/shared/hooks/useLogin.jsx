//clase que nos servira para los hooks personalizables
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//alias para diferenciar de funcion
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
	//variable para manejar el tiempo, y la variable para manejar el estado
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	//funcion para trabjar la data
	const login = async (user, password) => {
		setIsLoading(true);
		const response = await loginRequest({ user, password });
		if (response.error) {
			return toast.error(
				response.e?.response?.data || "ocurrio un error al iniciar sesion"
			);
		}
		setIsLoading(false);
		const { userDetails } = response.data;

		localStorage.setItem("user", JSON.stringify(userDetails));
		navigate("/list");
	};
	return {
		login,
		isLoading,
	};
};
