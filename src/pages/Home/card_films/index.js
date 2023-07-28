import './index.css'
import React, { useState } from 'react';

const CardFilms = ({ filme }) => {

    let [image, setImage] = useState({ src: ''});
    function importImage(imageName) {
        if (!imageName) return import(`./../../../assets/filmes/top_gun.png`);
        return import(`./../../../assets/filmes/${imageName}`);
    }

    importImage(filme.image).then((image) => {
        setImage({ src: image.default });
    });

    return (
        <div className="filme">
            <div className='content'>
                <div className="capa">
                    <img src={image.src} style={{width: "100%"}}/>
                </div>
                <div className="rodape">
                    {filme.nome}
                </div>
            </div>
        </div>
    )
}


export default CardFilms