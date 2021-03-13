

import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem.jsx';

const GifGrid = ({ category }) => {

    // estado de las imagenes (llama al custom hook useFetchGifs)
    const { data: images, loading } = useFetchGifs(category); // useFetch retorne {data, loading} que se desestructuran

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    );
}

export default GifGrid;
