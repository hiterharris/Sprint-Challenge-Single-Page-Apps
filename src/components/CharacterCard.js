import React from "react";
import styles from "styled-components";

const card= styles.div`  
border: 1px solid black;
margin: 2%;
padding: 3%;
`;

export default function CharacterCard(props) {
  console.log(props);
  return (
    <card>
      <img src={props.url} alt='rick & morty characters'/>
      <h3>Name: {props.name}</h3>
      <p>Species:{props.species}</p>
    </card>
  );
}