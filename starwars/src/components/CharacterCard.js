import React from "react";
import styled from "styled-components";
// import Homeworld from "./Homeworld";
// import axios from "axios";

const CardDiv = styled.div`
  max-width: 300px;
  background-color: white;
  margin: 20px;
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
  padding: 2%;
`;

const NameStyle = styled.h2`
  color: firebrick;
`;

const CharacterCard = props => {
  //   const [homeworld, setHomeworld] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://swapi.co/api/planets/")
  //       .then(response => {
  //         setHomeworld(response.data.results);
  //         console.log(response.data.results);
  //       })
  //       .catch(error => {
  //         console.log("The data was not returned", error);
  //       });
  //   }, []);

  return (
    <CardDiv>
      <NameStyle>{props.name}</NameStyle>
      <p>Year born: {props.birthyear}</p>
      <p>
        Height and weight: {props.height}cm, {props.mass}kg
      </p>
      <p>
        Attributes: {props.hair} hair, with {props.eyes} eyes
      </p>
      <p>Gender: {props.sex}</p>
      {/* {homeworld.map((planet, index) => (
        <Homeworld key={index} name={planet.name} /> */}
      {/* ))} */}
    </CardDiv>
  );
};

export default CharacterCard;
