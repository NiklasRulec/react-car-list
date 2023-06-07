import { useParams } from "react-router-dom";
import carData from "../components/cars.json";
import Header from "./Header";

const Car = () => {
  const idParams = useParams();
  console.log({ idParams });

  const carDetails = carData.filter((elm) => {
    return elm.id.toString() === idParams.carid;
  });
  console.log("Filtermet", carDetails);
  return (
    <section>
      <Header />
      <article>
        <h1>{carDetails[0].CarMake}</h1>
        <h1>{carDetails[0].CarYear}</h1>
        <h1>{carDetails[0].carModel}</h1>
      </article>
    </section>
  );
};

export default Car;
