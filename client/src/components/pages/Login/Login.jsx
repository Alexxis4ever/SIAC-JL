import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {login,reset} from '../../features/auth/authSlice'
import { Link } from 'react-router-dom'
// UI
import { ImgUI } from '../../UI/ImgUI/ImgUI'
import { ImgLeft } from "../../UI/ImgLeft/ImgLeft";
import { NavBarSession } from "../../UI/NavBarSession/NavBarSession";

// IMG
import logoLogin from "../../../Images/heroBg.png";
import logo from "../../../Images/logo.png";
import logoOrder from "../../../Images/Exclude.png"



function Login() {
    const [formData, setFormData] = useState({
      dni: '',
      password: '',
    })
  
    const { dni, password } = formData
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )
  
    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
      if (isSuccess || user) {
        navigate('/')
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      const userData = {
        dni,
        password,
      }
  
      dispatch(login(userData))
    }
  
    

 
    return (
      <div className="containerPrincipal">

      <section className="sectionLeft">
        <ImgLeft style="orderLogo" path={logoOrder} />
        <ImgLeft style="leftContain" path={logoLogin} />
      </section>

      <section className="sectionRight">

        <NavBarSession style='navBarLogin' />

        <section className="formLogin">
          <section className="heading">
            <div className="containerIcon">
              <ImgUI style="imgLogoLogin" routeImg={logo} />
            </div>

            <h1>Bienvenido</h1>
            <p className="txtInfoLogin">Por favor inicie sesion en su cuenta</p>
          </section>
  
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='dni'
                  name='dni'
                  value={dni}
                  placeholder='Identificacion'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  placeholder='Contraseña'
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
              <button type="submit" className="btn btn-block">
                Entrar
              </button>


              <p className='register'>¿No tienes una cuenta?<Link className='info-register' to="/register">Registrarse</Link></p>
            </div>
            
            <Link className='recover-password' to="/forgot-password"> Has olvidado tu contraseña</Link>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Login

