import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import CardFilms from "./card_films/index";

const Home = () => {
    const navigate = useNavigate();
    
    const lancamentos = [ 
        {
            nome: "Ghosts of Beirut",
            genero: "Drama",
            image: "ghosts_of_beirut.png"
        },
        {
            nome: "Special Ops: Lioness",
            genero: "Drama",
            image: "special_ops.png"
        },
        {
            nome: "The Rookie Feds",
            genero: "Drama",
            image: "the_rookie_feds.png"
        },
        {
            nome: "Nascido para vencer",
            genero: "Drama",
            image: "nascido_para_vencer.png",
        },
        {
            nome: "Ninja Turtles",
            genero: "Ação",
            image: "tartarugas_ninjas.png",
        },
        {
            nome: "Rocket Power",
            genero: "Animação",
            image: "rocket_power.png",
        },
        {
            nome: "The dead zone",
            genero: "Drama",
            image: "the_dead_zone.png",
        },
        {
            nome: "Transformers 4",
            genero: "Aventura",
            image: "transformers_4.png"
        },
        {
            nome: "Flip",
            genero: "Drama",
            image: "flip.png"
        },
        
    ];

    const maratonar = [
        {
            nome: "Todo mundo odeia o chris",
            genero: "Suspense",
            image: "cris.png",
        },
        {
            nome: "Top Gun Maverick",
            genero: "Ação",
            image: "top_gun.png",
        },
        {
            nome: "Tulsa King",
            genero: "Ação",
            image: "tulsa_king.png",
        },
        {
            nome: "Ghost of beirut",
            genero: "Ação",
            image: "ghosts_of_beirut.png",
        },
        {
            nome: "Star Trek",
            genero: "Ação",
            image: "star_trek.png"
        },
        {
            nome: "iCarly",
            genero: "Ação",
            image: "icarly.png"
        },
        {
            nome: "The Rookie Feds",
            genero: "Ação",
            image: "the_rookie_feds.png"
        },
        {
            nome: "Special Ops: Lioness",
            genero: "Drama",
            image: "special_ops.png"
        },
        {
            nome: "Halo",
            genero: "Ação",
            image: "halo.png"
        },
    ]

    const mais_assistidos = [
        {
            nome: "Shrek para sempre",
            genero: "Animação",
            image: "shrek_para_sempre.png",
        },
        {
            nome: "13 Minutes",
            genero: "Drama",
            image: "13_minutes.png"
        },
        {
            nome: "Babylon",
            genero: "Drama",
            image: "babylon.png"
        },
        {
            nome: "Todo mundo odeia o chris",
            genero: "Comédia",
            image: "cris.png",
        },
        {
            nome: "Top Gun Maverick",
            genero: "Ação",
            image: "top_gun.png",
        },
        {
            nome: "Resident Evil 5",
            genero: "Ação",
            image: "resident_evil_5.png",
        },
        {
            nome: "Madagascar 3",
            genero: "Animação",
            image: "madagascar_3.png"
        },
        {
            nome: "Special Ops: Lioness",
            genero: "Drama",
            image: "special_ops.png"
        },
        {
            nome: "Halo",
            genero: "Ação",
            image: "halo.png"
        },
    ]

    return (
        <div>
            <Header />
            <div className="categoria-container">
                <h2>Lançamentos</h2>
                <div className='filmes-container'>
                    { lancamentos.map((item, index) => <CardFilms filme={item} key={index}/>) }
                </div>
            </div>
            
            <div className="categoria-container">
                <h2>Para maratonar </h2>
                <div className='filmes-container'>
                    { maratonar.map((item, index) => <CardFilms filme={item} key={index}/>) }
                </div>
            </div>

            <div className="categoria-container">
                <h2>Mais assistidos</h2>
                <div className='filmes-container'>
                    { mais_assistidos.map((item, index) => <CardFilms filme={item} key={index}/>) }
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            
        </div>
    );
};

export default Home;