import React from 'react';
//import './Form.css';
import '../styles/Form.css'; // Asegúrate de tener un archivo CSS asociado

import imgGrande from '../styles/assets/Banner-Form-Flujo-Credito-CrediE.png';
import imgPequena from '../styles/assets/Banner-Form-Flujo-Credito-CrediE-Movil.png';
export default function ResponsiveImagen() {
  

    return (
        <div className="form-container">
          <picture>
            {/* Imagen para monitores y iPads */}
            <source
              srcSet={imgGrande}
              media="(min-width: 768px)"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            {/* Imagen para celulares */}
            <img
              src={imgPequena}
              alt="Imagen CrediE"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </picture>
          
          {/* Resto del formulario */}
          <form>
            {/* Campos del formulario */}
          </form>
        </div>
      );




}
