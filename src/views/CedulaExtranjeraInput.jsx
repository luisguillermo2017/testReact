import React from 'react';
import MaskedInput from 'react-text-mask';
import InputMask from 'react-input-mask';

export default function CedulaExtranjeraInput() {
 
    return (
        <div>
          <label htmlFor="cedula">Cedula:</label>
          <InputMask
            mask="*****"
            maskChar={null}
            id="cedula"
            name="cedula"
            placeholder="Ej: A1B2C3D4E5F6G7H8I9"
          />
        </div>
      );

}
