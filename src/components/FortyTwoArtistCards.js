import React from "react";
import "./FortyTwoArtistCards.css";
import { BrowserRouter as Router,Link,Route } from "react-router-dom";

const artists = [
  {
    id: 1,
    image: "./42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/Arcturus EPK/Photos-Videos-Logos/Photos-Graphics/image (2).jpeg",
    name: "Arcturus",
    alterEgo: "Diana Prince",
    alignment: "hero"
  },
  {
    id: 2,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/OptiK Sound EPK/Photos-Logos/Photos/Press Shot 1.jpg",
    name: "OptiK Sound",
    alterEgo: "Pamela Lillian Isley",
    alignment: "villain"
  },
  {
    id: 3,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/Collective Unconscious EPK/Photos-Logos-Bio/Speaker View.jpg",
    name: "Collective Unconcious",
    alterEgo: "Dinah Drake",
    alignment: "hero"
  },
  {
    id: 4,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/Spaceship Earth EPK/Photos-Logos/Photos/Spaceship Earth Photo 3.jpeg",
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
    <Link to={"/artist"} className="artist=">
    <div>
      <div
        className="card-container"
        style={{
          width:"500px",
          height: "500px",
          border: "solid 3px #d3d3d3",
          margin: "90px",
        }}
      >
        <img className="artist-image"src={props.artist.image}/>
        <p>
          <strong>{props.artist.name}</strong>
        </p>
        <p>{props.artist.alterEgo}</p>
        <p>{props.artist.alignment}</p>
      </div>
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