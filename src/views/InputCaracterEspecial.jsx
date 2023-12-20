import React, { useState } from 'react';

const InputCaracterEspecial = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    // Obtener el código de la tecla presionada
    const keyCode = event.keyCode;

    // Permitir solo la tecla Borrar (Backspace)
    if (keyCode !== 8) {
      // Prevenir la acción por defecto si la tecla no es permitida
      const isSpecialChar = event.key.match(/[^\w\s]/g);
      if (isSpecialChar) {
        event.preventDefault();
      }
    }
  };

  const handleChange = (event) => {
    const newValue = event.target.value;

    // Permitir solo letras, números y espacios
    const sanitizedValue = newValue.replace(/[^a-zA-Z0-9\s]/g, '');

    // Actualizar el estado solo si el valor es permitido
    setInputValue(sanitizedValue);
  };

  return (
    <div>
      <label htmlFor="noSpecialCharsInput">Input sin caracteres especiales:</label>
      <input
        type="text"
        id="noSpecialCharsInput"
        name="noSpecialCharsInput"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputCaracterEspecial;