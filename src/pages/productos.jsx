
import React, { Component } from 'react';
import Cookies from 'universal-cookie';


import Header from '../components/Header'
import Producto from '../components/Producto'

const cookies = new Cookies();


class Productos extends Component{

    

    componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./"
        }
    }

    render(){
        
        return(
            <div className="cont_productos">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className=" titles col-12  d-flex flex-column bd-highlight">
                            <h3>Hola {cookies.get('fistname')}</h3>
                            <h4>Nuestros productos</h4>
                        </div>
                        <div className=" cont_productos col-12  d-flex flex-column bd-highlight">
                            <Producto />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

   

}

export default Productos;