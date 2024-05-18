import { useState } from "react"
import { Login } from "../../../components/login/Login"
import { Register } from "../../../components/login/Register"

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev)
  }
  return (
    <div className="">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle} />
      ) : (''
        // <Register switchAuthHandler={handleAuthPageToggle} />
      )
      }
    </div>
  )
}

