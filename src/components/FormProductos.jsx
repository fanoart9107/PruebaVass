import React from 'react';


const FormProductos = () => {
    return(
        <form className="form-group">
                <label> Nombre </label>
                <input type="text" className="form-control"/>

                <label> Detalle </label>
                <input type="text" className="form-control"/>

                <label> Fecha </label>
                <input type="date" className="form-control"/>

                <label> cantidad </label>
                <input type="number" className="form-control"/>

                <label> Precio </label>
                <input type="number" className="form-control"/>
            </form>
    )   
}

export default FormProductos;