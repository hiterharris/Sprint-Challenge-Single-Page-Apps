import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(data => {
      console.log(data);
      setInfo(data.data.results);
    })
    .catch(error => {console.log("There was an error", error);
  })
}, []);

  return (
    <div>
      <section className="character-list">
        {info.map(char => (
        <CharacterCard url={char.image} name={char.name} gender={char.gender} local={char.location.name} species={char.species} status={char.status} />
        ))};
      </section>
    </div>
  );
}