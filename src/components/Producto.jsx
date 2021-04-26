import React, {useEffect, useState} from 'react';


const Producto = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:4000/products')
        .then(response => response.json())
        .then(data => setProductos(data));
    }, []);

    const noDisponible = (valor) =>{
        if(valor === 0){
            return "No Diponible"
        }else{
            return "Disponible"
        }
    }
    return(
        <div>

            <ul className="list-group d-flex align-items-start">
                {productos.map((producto) =>
                    <li key={producto.name} className=" producto list-group-item">
                        <h3>{producto.name}</h3>
                        <h4>{producto.date}</h4>
                        <p>{producto.detail}</p>
                        <h5>Cantidad: {producto.in.quantity} <span>{noDisponible(producto.in.quantity)}</span> </h5>
                        <h6>Precio: {producto.in.unitValue}</h6>
                    </li>



                )}
            </ul>
            
        </div>
    )   
}

export default Producto;