import React, { useState } from 'react';

export default function InputMascara() {

//     const [phoneNumber, setPhoneNumber] = useState('');
//   const mask = '_ -____-____';

//   const handleInputChange = (event) => {
//     const inputValue = event.target.value;
//     let formattedValue = '';

//     let maskIndex = 0;

//     for (let i = 0; i < inputValue.length && maskIndex < mask.length; i++) {
//       const inputChar = inputValue[i];

//       if (mask[maskIndex] === '_') {
//         // Permitir solo dígitos y letras
//         if (/^[a-zA-Z0-9]$/.test(inputChar)) {
//           formattedValue += inputChar;
//         }
//       } else if (mask[maskIndex] === '-') {
//         formattedValue += '-';
//         maskIndex += 1; // Saltar al siguiente carácter de la máscara
//       } else {
//         // Mantener los otros caracteres de la máscara
//         formattedValue += mask[maskIndex];
//       }

//       maskIndex += 1;
//     }

//     setPhoneNumber(formattedValue);
//   };

//   return (
//     <div>
//       <label htmlFor="maskedInput">Teléfono:</label>
//       <input
//         type="text"
//         id="maskedInput"
//         name="maskedInput"
//         value={phoneNumber}
//         onChange={handleInputChange}
//       />
//     </div>
//   );












    // const [phoneNumber, setPhoneNumber] = useState('');
    // const mask = '_ -____-____';
  
    // const handleInputChange = (event) => {
    //   const inputValue = event.target.value;
    //   let formattedValue = '';
  
    //   let maskIndex = 0;
  
    //   for (let i = 0; i < inputValue.length && maskIndex < mask.length; i++) {
    //     const inputChar = inputValue[i];
  
    //     if (mask[maskIndex] === '_') {
    //       // Permitir solo dígitos
    //       if (/^\d$/.test(inputChar)) {
    //         formattedValue += inputChar;
    //       }
    //     } else if (mask[maskIndex] === '-') {
    //       formattedValue += '-';
    //       maskIndex += 1; // Saltar al siguiente carácter de la máscara
    //     } else {
    //       // Mantener los otros caracteres de la máscara
    //       formattedValue += mask[maskIndex];
    //     }
  
    //     maskIndex += 1;
    //   }
  
    //   setPhoneNumber(formattedValue);
    // };
  
    // return (
    //   <div>
    //     <label htmlFor="maskedInput">Teléfono:</label>
    //     <input
    //       type="text"
    //       id="maskedInput"
    //       name="maskedInput"
    //       value={phoneNumber}
    //       onChange={handleInputChange}
    //     />
    //   </div>
    // );
  















    const [phoneNumber, setPhoneNumber] = useState('');
  const mask = '_-_____-_____';

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    let formattedValue = '';

    let maskIndex = 0;

    for (let i = 0; i < inputValue.length && maskIndex < mask.length; i++) {
      if (mask[maskIndex] === '_') {
        formattedValue += inputValue[i];
      } else if (mask[maskIndex] === '-') {
        formattedValue += '-';
        maskIndex += 1; // Saltar al siguiente carácter de la máscara
      } else {
        formattedValue += mask[maskIndex];
      }

      maskIndex += 1;
    }

    setPhoneNumber(formattedValue);
  };

  return (
    <div>
      <label htmlFor="maskedInput">Teléfono:</label>
      <input
        type="text"
        id="maskedInput"
        name="maskedInput"
        value={phoneNumber}
        onChange={handleInputChange}
      />
    </div>
  );

}
