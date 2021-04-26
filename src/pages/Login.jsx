import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';


const baseUrl= "http://localhost:4000/ussers"
const  cookies = new Cookies();

class Login extends Component{

    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    iniciarSesion = async() =>{
        await axios.get(baseUrl,{params: {username: this.state.form.username, password: this.state.form.password } })
        .then(response => {
            return response.data
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id,{ path: './'})
                cookies.set('fistname', respuesta.firstname,{ path: './'})
                cookies.set('lastname', respuesta.lastname,{ path: './'})
                cookies.set('username', respuesta.username,{ path: './'})

                alert (`hola ${respuesta.firstname} ${respuesta.lastname}`)
                window.location.href='./productos'

            }else{
                alert('El usuario o la contraseña no ons correctos')
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    componentDidMount(){
        if(cookies.get('username')){
            window.location.href="./productos"
        }
    }

    render(){
        return(
            <div className="login d-flex mh-100 align-self-stretch align-items-center justify-content-center">
                <div className="cont_login d-flex flex-column bd-highlight">
                    <h3 className="title">Login control de inventario</h3>

                    <label>Usuario</label>
                    <input className="inputs" type="text" name="username" onChange={ this.handleChange } />

                    <label>Contraseña </label>
                    <input  type="password" name="password" onChange={ this.handleChange } />

                    <button className="btn  btn-light" onClick={() => this.iniciarSesion()} >Iniciar Sesión</button>

                </div>

            </div>
            
        )
    }
}

export default Login;
