import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; 

export const useRegister = () => {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const register = async (name, username, userEmail, password ) => {
		setIsLoading(true);
		const response = await registerRequest({name,username, userEmail, password});
		setIsLoading(false);
		if (response.error) {
			return toast.error(
				response.error?.response?.data || "ocurrio un error al registrarse"
			);
		}
		const { userDetails } = response.data;
		
		localStorage.setItem("user", JSON.stringify(userDetails));
		navigate("/");
	};
	return {
		register,
		isLoading,
	};
};
