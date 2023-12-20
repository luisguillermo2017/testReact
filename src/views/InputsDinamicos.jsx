import React, { useState } from 'react';

export default function InputsDinamicos() {
 

    const [inputs, setInputs] = useState([{}]);

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], [event.target.name]: event.target.value };
    setInputs(newInputs);
  };

  const addNewInputs = () => {
    setInputs([...inputs, {}]);
  };

  const removeInputs = index => {
         const newInputs = inputs.filter((_, i) => i !== index);
         setInputs(newInputs);
       };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // Aquí puedes manejar los datos de los inputs, como enviarlos a un servidor
  };

  function verificarClavesYValores(array) {
    const clavesRequeridas = ['nombre', 'apellido1', 'apellido2', 'telefono', 'direccion'];

    return array.map(objeto => {
        // Verifica que todas las claves requeridas estén presentes y tengan un valor no vacío
        for (let clave of clavesRequeridas) {
            if (!objeto.hasOwnProperty(clave) || objeto[clave] === '' || objeto[clave] == null) {
                return 'Objeto incompleto o con claves vacías';
            }
        }

        // Si todas las claves están presentes y tienen valores no vacíos
        return 'Objeto válido';
    });
}

let datosValidados = verificarClavesYValores(inputs);

function verificarTodosValidos(array) {
  return array.every(elemento => elemento === 'Objeto válido');
}

const sonTodosValidos = verificarTodosValidos(datosValidados);

console.log('sonTodosValidos: ' + sonTodosValidos);

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            name="nombre"
            value={input.nombre || ''}
            onChange={e => handleInputChange(index, e)}
            placeholder="Nombre"
          />
          <input
            name="apellido1"
            value={input.apellido1 || ''}
            onChange={e => handleInputChange(index, e)}
            placeholder="Apellido 1"
          />
          <input
            name="apellido2"
            value={input.apellido2 || ''}
            onChange={e => handleInputChange(index, e)}
            placeholder="Apellido 2"
          />
          <input
            name="telefono"
            value={input.telefono || ''}
            onChange={e => handleInputChange(index, e)}
            placeholder="Teléfono"
          />
          <input
            name="direccion"
            value={input.direccion || ''}
            onChange={e => handleInputChange(index, e)}
            placeholder="Dirección"
          />
          {index !== 0 && (
             <button type="button" onClick={() => removeInputs(index)}>
               Eliminar trabajo
             </button>
           )}
        </div>
      ))}
      <button type="button" onClick={addNewInputs}>Agregar nuevos campos</button>
      <button type="submit">Enviar</button>
      <h4>{JSON.stringify(inputs)}</h4>
    </form>
  );


}




// import React, { useState } from 'react';

// export default function InputsDinamicos() {
//   const [inputs, setInputs] = useState([{}]);

//   const handleInputChange = (index, event) => {
//     const newInputs = [...inputs];
//     newInputs[index] = { ...newInputs[index], [event.target.name]: event.target.value };
//     setInputs(newInputs);
//   };

//   const addNewInputs = () => {
//     setInputs([...inputs, {}]);
//   };

//   const removeInputs = index => {
//     const newInputs = inputs.filter((_, i) => i !== index);
//     setInputs(newInputs);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Verificar los datos aquí
//     console.log(inputs);
//     // Aquí puedes manejar los datos de los inputs, como enviarlos a un servidor
//   };

//   // ... resto de tus funciones ...

//   return (
//     <form onSubmit={handleSubmit}>
//       {inputs.map((input, index) => (
//         <div key={index}>
//           <input
//             name="nombre"
//             value={input.nombre || ''}
//             onChange={e => handleInputChange(index, e)}
//             placeholder="Nombre"
//           />
//           <input
//             name="apellido1"
//             value={input.apellido1 || ''}
//             onChange={e => handleInputChange(index, e)}
//             placeholder="Apellido 1"
//           />
//           <input
//             name="apellido2"
//             value={input.apellido2 || ''}
//             onChange={e => handleInputChange(index, e)}
//             placeholder="Apellido 2"
//           />
//           <input
//             name="telefono"
//             value={input.telefono || ''}
//             onChange={e => handleInputChange(index, e)}
//             placeholder="Teléfono"
//           />
//           <input
//             name="direccion"
//             value={input.direccion || ''}
//             onChange={e => handleInputChange(index, e)}
//             placeholder="Dirección"
//           />
//           {index !== 0 && (
//             <button type="button" onClick={() => removeInputs(index)}>
//               Eliminar trabajo
//             </button>
//           )}
//         </div>
//       ))}
//       <button type="button" onClick={addNewInputs}>Agregar nuevos campos</button>
//       <button type="submit">Enviar</button>
//       <h4>{JSON.stringify(inputs)}</h4>
//     </form>
//   );
// }

