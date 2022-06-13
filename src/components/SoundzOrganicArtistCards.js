import React from "react";
import "./SoundzOrganicArtistCards.css";

const artists = [
  {
    id: 1,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/Forty Two Recordings EPKs (Lizzy_s Artists)/Dozen Matter/Photos-Logos-Art/Photos/event-78_Original.jpg",
    name: "Dozen Matter",
    alterEgo: "Diana Prince",
    alignment: "hero"
  },
  {
    id: 2,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/Forty Two Recordings EPKs (Lizzy_s Artists)/Dream Signal/Photos-Art-Logos/Photos/split headshot.PNG",
    name: "Dream Signal",
    alterEgo: "Pamela Lillian Isley",
    alignment: "villain"
  },
  {
    id: 3,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/Forty Two Recordings EPKs (Lizzy_s Artists)/haven woods./Logos-Photos-Album Art/Photos/IMG_7841.jpg",
    name: "haven woods.",
    alterEgo: "Dinah Drake",
    alignment: "hero"
  },
  {
    id: 4,
    image: "/42Stuff/Forty Two Recordings EPKs (Noah_s Artists)/Forty Two Recordings EPKs (Lizzy_s Artists)/Klvtch the Alien/Photos-Art-Logos/Photos/klvtch at EL.png",
    name: "Klvtch the Alien",
    alterEgo: "Selina Kyle",
    alignment: "villain"
  }
];

const IndividualArtistCard = props => {
  return (
    <li>
      <div
        className="card-container"
        style={{
          width: "20%",
          border: "solid 3px #d3d3d3",
          margin: "10px auto"
        }}
      >
        <img className="artist-image"src={props.artist.image}/>
        <p>
          <strong>{props.artist.name}</strong>
        </p>
        <p>{props.artist.alterEgo}</p>
        <p>{props.artist.alignment}</p>
      </div>
    </li>
  );
};

const SoundzOrganicArtistCards = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {artists.map(artist => {
        return <IndividualArtistCard artist={artist} key={artist.id} />;
      })}
    </ul>
  );
};

export default SoundzOrganicArtistCards;