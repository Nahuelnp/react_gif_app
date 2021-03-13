import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategorias }) => {
    // estado del input
    const [inputValue, setInputValue] = useState('');
    // cambia el estado del input
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    // llama a setCategorias que viene de las propsm (agrega nuevas categorias)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 1) {
            setCategorias(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

export default AddCategory;

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
