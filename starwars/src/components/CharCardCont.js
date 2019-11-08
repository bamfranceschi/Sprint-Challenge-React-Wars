import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const CharCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10%;
  margin-left: 4%;
  margin-right: 4%;
`;

const CharCardCont = () => {
  const [character, setCharacter] = useState([]);

  //useEffect here to pull in swapi

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharacter(response.data.results);
        // console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <CharCardDiv>
      {character.map((person, index) => (
        <CharacterCard
          key={index}
          name={person.name}
          birthyear={person.birth_year}
          height={person.height}
          mass={person.mass}
          hair={person.hair_color}
          eyes={person.eye_color}
          sex={person.gender}
          //   films={person.films}
        />
      ))}
      ))
    </CharCardDiv>
  );
};

export default CharCardCont;
