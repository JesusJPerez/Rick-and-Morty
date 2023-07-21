import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import getRandomNumber from "./utils/getRandomNumber";
import FormLocation from "./components/FormLocation";
import ResidentCard from "./components/ResidentCard";
import LocationInfo from "./components/LocationInfo";

function App() {
  const [location, setLocation] = useState();
  const [idLocation, setIdLocation] = useState(getRandomNumber(126));
  const [hasError, sethasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    setIsLoading(true)
    axios
      .get(url)
      .then((res) => {
        setLocation(res.data);
        sethasError(false);
      })
      .catch((err) => {
        console.error(err);
        sethasError(true);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }, [idLocation]);

  console.log(location)

  return (
    <div className="body">
      <div className="title"><img src="/img/img007.png" alt="" /></div>
      < FormLocation  setIdLocation={setIdLocation} />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : hasError ? (
        <h1>❌ Hey! you must provide an id from 1 to 126 😥</h1>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident_container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default App;
