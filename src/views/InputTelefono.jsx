import React, { useState } from 'react';

export default function InputTelefono() {
    const [telefono, setTelefono] = useState('');
    const [error, setError] = useState('');
  
    const handleInputChange = (event) => {
      const newValue = event.target.value;
  
      // Permitir solo números y el guion
      const sanitizedValue = newValue.replace(/[^0-9-]/g, '');
  
      setTelefono(sanitizedValue);
    };
  
    return (
      <div>
        <label htmlFor="telefonoInput">Teléfono:</label>
        <input
          type="text"
          id="telefonoInput"
          name="telefonoInput"
          value={telefono}
          onChange={handleInputChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
}
