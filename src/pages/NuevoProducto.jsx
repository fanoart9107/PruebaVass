import React from 'react';
import Header from '../components/Header'
import FormProductos from '../components/FormProductos'

const NuevoProducto = () =>{
    return(
        <div>
            <Header />
            

            <div className="container">
                <div className="row">
                    <h3>Nueva entrada de producto</h3>
                    <FormProductos />
                </div>
            </div>

            
        </div>
    )
}

export default NuevoProducto;