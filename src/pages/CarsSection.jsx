import { Link } from "react-router-dom";
import carData from "../components/cars.json";
import Header from "./Header";

const CarsSection = () => {
  console.log(carData);
  return (
    <section className="App">
      <Header />
      <section className="grid">
        {carData.map((elm, index) => {
          return (
            <div className="grid-item" key={index}>
              <h2>{elm.CarMake}</h2>
              <Link to={`/carssection/${elm.id}`}> Read More </Link>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default CarsSection;
