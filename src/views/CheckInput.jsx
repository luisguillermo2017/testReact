import React, { useState } from 'react';

export default function CheckInput() {
  
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      console.log("Checkbox seleccionado.");
    } else {
      console.log("Checkbox no seleccionado.");
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
        <div style={{ flex: 1 }}>
          ¿Aceptas?
        </div>
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );

}
