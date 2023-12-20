import React from 'react';
import './Form.css';  // Asegúrate de tener un archivo CSS asociado

export default function imagenResponsive() {
  

    return (
        <div className="form-container">
          <picture>
            {/* Imagen para monitores y iPads */}
            <source
              srcSet="./Banner-Form-Flujo-Credito-CrediE.png"
              media="(min-width: 768px)"
            />
            {/* Imagen para celulares */}
            <img
              src="./Banner-Form-Flujo-Credito-CrediE-Movil.png"
              alt="Imagen para celulares"
            />
          </picture>
          
          {/* Resto del formulario */}
          <form>
            {/* Campos del formulario */}
          </form>
        </div>
      );


}
