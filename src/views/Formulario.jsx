import React, { useState } from 'react';

const Formulario = () => {
    const [inputGroups, setInputGroups] = useState([{ nombre: '', apellido: '', edad: '' }]);
    const [errors, setErrors] = useState([]);

    const handleInputChange = (index, field, value) => {
        const newInputGroups = [...inputGroups];
        newInputGroups[index][field] = value;
        setInputGroups(newInputGroups);
    };

    const addInputGroup = () => {
        setInputGroups([...inputGroups, { nombre: '', apellido: '', edad: '' }]);
    };

    const handleSubmit = () => {
        const newErrors = inputGroups.map(group => ({
            nombre: !group.nombre,
            apellido: !group.apellido,
            edad: !group.edad
        }));
        setErrors(newErrors);
    };

    return (
        <div>
            {inputGroups.map((group, index) => (
                <div key={index}>

                    <br></br>
                    <input
                        type="text"
                        value={group.nombre}
                        onChange={(e) => handleInputChange(index, 'nombre', e.target.value)}
                        placeholder="Nombre"
                    />
                    {errors[index]?.nombre && <span>Error: Campo requerido</span>}
                    
                    <input
                        type="text"
                        value={group.apellido}
                        onChange={(e) => handleInputChange(index, 'apellido', e.target.value)}
                        placeholder="Apellido"
                    />
                    {errors[index]?.apellido && <span>Error: Campo requerido</span>}

                    <input
                        type="number"
                        value={group.edad}
                        onChange={(e) => handleInputChange(index, 'edad', e.target.value)}
                        placeholder="Edad"
                    />
                    {errors[index]?.edad && <span>Error: Campo requerido</span>}
                </div>
            ))}
            <button onClick={addInputGroup}>Agregar</button>
            <button onClick={handleSubmit}>Enviar</button>

            <div>{JSON.stringify(errors)}</div>
        </div>
    );
};

export default Formulario;