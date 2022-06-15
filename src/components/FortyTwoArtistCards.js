import React from "react";
import "./FortyTwoArtistCards.css";
import { BrowserRouter as Router,Link,Route } from "react-router-dom";

const artists = [
  {
    id: 1,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/Arcturusresized.jpg",
    name: "Arcturus",
    alterEgo: "Diana Prince",
    alignment: "hero"
  },
  {
    id: 2,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/OSresized.png",
    name: "OptiK Sound",
    alterEgo: "Pamela Lillian Isley",
    alignment: "villain"
  },
  {
    id: 3,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/CUresized.png",
    name: "Collective Unconcious",
    alterEgo: "Dinah Drake",
    alignment: "hero"
  },
  {
    id: 4,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/SEresized.png",
    name: "Spaceship Earth",
    alterEgo: "Selina Kyle",
    alignment: "villain"
  },
  {
    id: 5,
    image: "",
    name: "Mindex",
    alterEgo: "Selina Kyle",
    alignment: "villain"
  }
];

const IndividualArtistCard = props => {
  return (
    <Link to={"/Artist/" + props.artist.name} className="artist">
      <div
        className="card-container"
      >
        <img className="artist-image"src={props.artist.image}/>
        <p>
          <strong>{props.artist.name}</strong>
        </p>
        <p>{props.artist.alterEgo}</p>
        <p>{props.artist.alignment}</p>
      </div>
  </Link>
  );
};

const FortyTwoArtistCards = () => {
  return (
    <div className="cards-container">
      {artists.map(artist => {
        return <IndividualArtistCard artist={artist} key={artist.id} />;
      })}
    </div>
  );
};

export default FortyTwoArtistCards;