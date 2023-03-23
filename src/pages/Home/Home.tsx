import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from '../../components/Carousel/Carousel';
import Navbar from '../../components/Navbar/Navbar'

function Home() {
    const slides = [
        { url: 'https://images.unsplash.com/photo-1553615738-d8e0829f1d61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80', title: 'Foto 01' },
        { url: 'https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg', title: 'Foto 02' },
        { url: 'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg', title: 'Foto 03' },
    ];

    return (
        <>
            
            <section className='conteiner'>
                <h1>Carrossel</h1>
                <Navbar />
                <div className='screenCarousel'>
                    <Carousel slides={slides} />
                </div>
            </section>

        </>
    );
};


export default Home
