import React, {useState,useEffect} from "react";
import Card from "./card.jsx";
import axios from 'axios';
import Navbar from "./navBar.jsx";
import Crousel from "./crousel.jsx";
function Main() {
  const [cars, setCars] = useState([]);
  const [color, setColor] = useState("All");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleColorSelect = (newcolor) => {
    setColor(newcolor);
  };
  const handlePriceSelect = (newprice) => {
    setPrice(newprice);
  };
  const handleMileageSelect = (newmileage) => {
    setMileage(newmileage);
  };

  const handleSearch = (newCars) => {
    console.log("handle search",newCars)
    setCars(newCars)
  };
  useEffect(() => {
      async function fetchCars() {
        try {
          let queryObject = {}
          if(color){
            queryObject.color=color;
          }
          if(price){
            queryObject.price=price;
          }
          if(mileage){
            queryObject.mileage=mileage;
          }
          const response = await axios.get('https://buysbackend.vercel.app/api/data', {
            params:queryObject
          }
            );
          setCars(response.data);
         
          console.log(response.data);
        } catch (error) {
          console.error("Error!!");
        }
      }
  
      fetchCars();
    }, []);

   
useEffect(() => {
  async function fetchCars() {
    try {
      const response = await axios.get('https://buysbackend.vercel.app/api/data', {
        params: {
          color: color,
          order: price,
          mileage: mileage,
        }
      });

      setCars(response.data);
    } catch (error) {
      console.error("Error!!");
    }
  }

  fetchCars();
}, [color,price,mileage]);

      const fetchSearch = async () => {
        try{
          console.log("Before API Call - Search Query:", searchQuery);
          let queryObject = {}
          if(searchQuery){
            queryObject.searchQuery=searchQuery;
          }
          const response = await axios.get('https://buysbackend.vercel.app/api/search',{
            params:{
              search: searchQuery
            }
          });
          console.log(response.data);
        }
        catch (error){
          console.error("error: ",error);
        }
      }

   console.log("cars", cars)

    const inventory= cars.map((car) => 
      <Card id={car.car_id} name={car.model_name} price={car.list_price} color={car.color} mileage={car.mileage} />
    );
  return (
    <div>
      <Navbar onColorSelect={handleColorSelect} onPriceSelect={handlePriceSelect} onMileageSelect={handleMileageSelect} onSearch={handleSearch} />
      <Crousel />

    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cars.map((car) => 
      <Card id={car.car_id} name={car.model_name} price={car.list_price} color={car.color} mileage={car.mileage} />
    )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;