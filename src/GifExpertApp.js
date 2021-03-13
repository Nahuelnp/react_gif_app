import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball']);

    return (
        <div>
            <h2>Gif Expert</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr />
            <ol>
                {
                    categorias.map(categoria => 
                        <GifGrid category={categoria}
                         key={categoria}
                         />
                    )
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;
