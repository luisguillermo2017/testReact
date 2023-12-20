import React, { useState } from 'react';
import Select from 'react-select';

export default function SelectAgregarNuevoMantenerValoreElegido() {
 

    const [selectorGroups, setSelectorGroups] = useState([{
        firstSelect: null,
        secondSelect: null,
        thirdSelect: null,
    }]);

    const handleFirstSelectChange = (index, selectedOption) => {
        const newSelectorGroups = [...selectorGroups];
        newSelectorGroups[index] = {
            ...newSelectorGroups[index],
            firstSelect: selectedOption,
            secondSelect: null,
            thirdSelect: null,
        };
        setSelectorGroups(newSelectorGroups);
    };

    // Añadir un nuevo grupo de selectores
    const addSelectorGroup = () => {
        setSelectorGroups([...selectorGroups, { firstSelect: null, secondSelect: null, thirdSelect: null }]);
    };

    // Renderiza cada grupo de selectores
    const renderSelectorGroups = () => {
        return selectorGroups.map((group, index) => (
            <div key={index}>
                <Select
                    value={group.firstSelect}
                    onChange={(option) => handleFirstSelectChange(index, option)}
                    options={[ /* opciones aquí */ ]}
                />
                <Select
                    value={group.secondSelect}
                    onChange={(option) => setSelectorGroups([
                        ...selectorGroups.slice(0, index),
                        { ...selectorGroups[index], secondSelect: option },
                        ...selectorGroups.slice(index + 1),
                    ])}
                    options={[ /* opciones aquí */ ]}
                    isDisabled={!group.firstSelect}
                />
                <Select
                    value={group.thirdSelect}
                    onChange={(option) => setSelectorGroups([
                        ...selectorGroups.slice(0, index),
                        { ...selectorGroups[index], thirdSelect: option },
                        ...selectorGroups.slice(index + 1),
                    ])}
                    options={[ /* opciones aquí */ ]}
                    isDisabled={!group.secondSelect}
                />
            </div>
        ));
    };

    return (
        <form>
            {renderSelectorGroups()}
            <button type="button" onClick={addSelectorGroup}>Agregar Grupo</button>
        </form>
    );
}




