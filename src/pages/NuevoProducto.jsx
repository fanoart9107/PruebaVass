import React from 'react';
import Header from '../components/Header'
import FormProductos from '../components/FormProductos'

const NuevoProducto = () =>{
    return(
        <div>
            <Header />
            

            <div className="container">
                <div className="row">
                    <div className=" col-12  d-flex flex-column bd-highlight">
                        <h3>Nueva entrada de producto</h3>
                    </div>
                    <div className=" col-6  d-flex flex-column bd-highlight">
                        <FormProductos />
                    </div>
                    
                    
                </div>
            </div>

            
        </div>
    )
}

export default NuevoProducto;