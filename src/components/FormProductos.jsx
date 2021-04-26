import React from 'react';


const FormProductos = () => {
    return(
        <form>
                <label> Nombre </label>
                <input type="text"/>

                <label> Detalle </label>
                <input type="text"/>

                <label> Fecha </label>
                <input type="date"/>

                <label> cantidad </label>
                <input type="number"/>

                <label> Precio </label>
                <input type="number"/>
            </form>
    )   
}

export default FormProductos;