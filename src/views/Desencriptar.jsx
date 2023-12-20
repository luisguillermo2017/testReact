import React, { useState, useEffect } from 'react';

const Desencriptar = () => {
  const [decodedValue, setDecodedValue] = useState('');

  useEffect(() => {
    const encodedValue = 'Y2FzYTEyMw==';

    // Decodificar el valor en base64 usando atob
    const decodedString = atob(encodedValue);

    setDecodedValue(decodedString);
  }, []);

  return (
    <div>
      <p>Valor codificado en base64: Y2FzYTEyMw==</p>
      <p>Valor decodificado: {decodedValue}</p>
    </div>
  );
};

export default Desencriptar;