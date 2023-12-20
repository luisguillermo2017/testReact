import React from 'react';
import MaskedInput from 'react-text-mask';

const TelefonoInput = () => {
  const telefonoMask = [
    /\d/, /\d/, /\d/, /\d/,
    '-',
    /\d/, /\d/, /\d/, /\d/
  ];

  return (
    <div>
      <label htmlFor="telefono">Teléfono:</label>
      <MaskedInput
        mask={telefonoMask}
        guide={false} // Indica que no muestre automáticamente los guiones
        id="telefono"
        name="telefono"
        placeholder="____-____"
      />
    </div>
  );
};

export default TelefonoInput;