import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [beerDetails, setBeerDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setBeerDetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />

      <div>
        <img src={beerDetails.image_url} alt={beerDetails.name} width={60} />
        <h3>{beerDetails.name}</h3>
        <p>{beerDetails.tagline}</p>
        <p>{beerDetails.first_brewed}</p>
        <p> {beerDetails.attenuation_level}</p>
        <p>{beerDetails.description}</p>
        <p>{beerDetails.contributed_by}</p>
      </div>
    </div>
  );
}
export default RandomBeer;
