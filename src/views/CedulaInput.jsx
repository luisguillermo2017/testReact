import React from 'react';
import MaskedInput from 'react-text-mask';

const CedulaInput = () => {
  const MaskCedulaNacional = [/\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  return (
    <div>
      <label htmlFor="cedula">Cedula:</label>
      <MaskedInput
        mask={MaskCedulaNacional}
        guide={false} // Indica que no muestre los guiones automáticamente
        id="cedula"
        name="cedula"
        placeholder="Ej: ---------------"
      />
    </div>
  );
};

export default CedulaInput;




// import React from 'react';
// import MaskedInput from 'react-input-mask';

// const CedulaExtranjeraInput = () => {
//   return (
//     <div>
//       <label htmlFor="cedulaExtranjera">Cedula Extranjera:</label>
//       <MaskedInput
//         mask="*****"
//         maskChar="_"
//         id="cedulaExtranjera"
//         name="cedulaExtranjera"
//         placeholder="Ej: A12B34C56"
//       />
//     </div>
//   );
// };

// export default CedulaExtranjeraInput;