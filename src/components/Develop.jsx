import React from "react";
import "./Develop.css";

const Develop = () => {
  return (
    <div id="develop" className="develop-container">
      <div id="gallery" className="title-container">
        <h1>WEB DEVELOPING PROJECTS</h1>
      </div>
      <div className="card">
        <div className="imagen-contenedor">
          <img
            src="https://camo.githubusercontent.com/022b58d5a1e0a34eea766f3fe25fa352120185db727b592d8f3f6b4589e0a7c3/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3730313136343133373038313733333230312f313030343131303738393030303536383838332f756e6b6e6f776e2e706e673f77696474683d31303534266865696768743d363634"
            alt=""
          />
        </div>
        <div className="texto-contenedor">
          <h1>Whack-a-mole - Game</h1>
          <p>
            Exercise testing javascript. Making "Whac a mole" game with the
            things we learned on my 3rd week of bootcamp. In each game you've
            got 30 seconds to make points smashing moles..
          </p>
          <a
            href="https://mistymidnights.github.io/molebuster/"
            target="_blank"
          >
            GitHub/Molebuster
          </a>
        </div>
      </div>
      <div className="card2">
        <div className="imagen-contenedor">
          <img
            src="https://camo.githubusercontent.com/8fc44a8ecb1ca83c7134b67d1d696ed0ebd928ef5a9d8433c0414865740353d6/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3730313136343133373038313733333230312f313030343130363337323539313339343837372f756e6b6e6f776e2e706e673f77696474683d363735266865696768743d333335"
            alt=""
          />
        </div>
        <div className="texto-contenedor">
          <h1>Pokemon project</h1>
          <p>
            Exercise using the "PokeApi" trying to fetch urls and print it to
            document. Added a filter menu with the type of pokemon.
          </p>
          <a
            href="https://mistymidnights.github.io/poke-project/"
            target="_blank"
          >
            GitHub/PokeProject
          </a>
        </div>
      </div>
      <div className="card">
        <div className="imagen-contenedor">
          <img
            src="https://camo.githubusercontent.com/f8effbf139c8ce88758ae395286a4951b1ccf5dda7780b92ab49856967d08dfa/68747470733a2f2f692e6779617a6f2e636f6d2f30653736623837396136343664383261313133316236303961616534663434302e6a7067"
            alt=""
          />
        </div>
        <div className="texto-contenedor">
          <h1>API and Front "Eurodance"</h1>
          <p>
            Create an API with information about songs, artists and years of the
            genre using MongoDB and Insomnia. API deployed and consumed by the
            front page. Result:
          </p>
          <p>* Not builded</p>
        </div>
      </div>
      <div className="card2">
        <div className="imagen-contenedor">
          <img
            src="https://media.discordapp.net/attachments/701164137081733201/1013009690810134569/Captura_de_pantalla_2022-08-27_105738.png?width=1330&height=664"
            alt=""
          />
        </div>
        <div className="texto-contenedor">
          <h1>Studio Ghibli -React JS</h1>
          <p>
            One of the first projects using react and vite using the "Studio
            Ghibli" API and painting the movie cards with the information. Added
            "dark/light mode".
          </p>
          <a href="https://react-studio-ghibli-page.vercel.app" target="_blank">
            GitHub/StudioGhibli
          </a>
        </div>
      </div>
      <div className="card">
        <div className="imagen-contenedor">
          <img
            src="https://camo.githubusercontent.com/ac0500f4adda51ca78e1490a9c08e032d080714dc100cb97794e5cdedc026fec/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3730313136343133373038313733333230312f313030383738353736343038303936333634352f756e6b6e6f776e2e706e673f77696474683d31333137266865696768743d363532"
            alt=""
          />
        </div>
        <div className="texto-contenedor">
          <h1>Valorant - React JS</h1>
          <p>
            Website made with vite + react. The valorant API has been used to
            map and paint the character cards, weapons, maps...
          </p>
          <p>* Not builded</p>
        </div>
      </div>
    </div>
  );
};

export default Develop;
