import React,{useState, useEffect} from "react";
import Drop from "./dropdown.jsx";
import Price from "./price.jsx";
import Mile from "./mile.jsx";
import axios from 'axios'

function Navbar({onColorSelect, onPriceSelect, onMileageSelect, onSearch}) {
  const [color, setColor] = useState("All");
  const handleColorSelect = (newcolor) => {
    onColorSelect(newcolor);
    setColor(newcolor);
  } 
  
  const [price, setPrice] = useState("");
  const handlePriceSelect = (newprice) => {
    onPriceSelect(newprice);
    setPrice(newprice);
  }

  const [mileage, setMileage] = useState("All");
  const handleMileageSelect = (newmileage) => {
    onMileageSelect(newmileage);
    setMileage(newmileage);
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const newchange = event.target.value;
    setSearchQuery(newchange);
  }

  const handleSearchClick = () => {
    console.log("clicked");
    handleInputChange();
  }

useEffect(() => {
  const fetchSearch = async () => {
    try{
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
      onSearch(response.data)
    }
    catch (error){
      console.error("error: ",error);
    }
  }
  
  console.log("Before Fetch Call");
  fetchSearch();
  console.log("After Fetch Call");
}, [searchQuery]);

  return (
    <nav style={{backgroundColor:'#92C7CF !important', fontFamily:"helvatica"}} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/valid-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 400"
            width="50px"
            height="50px"
            id="car"
          >
            <path
              fill="#262626"
              d="m330 355 140-70-320-160-140 70z"
              opacity=".3"
            ></path>
            <path
              fill="#2D3134"
              d="m255.9 299.3 50.2-13.9-34.6-19.9-17.5 16.9z"
            ></path>
            <path
              d="m255.9 299.3 50.2-13.9-34.6-19.9-17.5 16.9z"
              opacity=".29"
            ></path>
            <path
              fill="#2D3134"
              d="m64.5 202 50.2-14L80 168.1 62.5 185z"
            ></path>
            <path d="m64.5 202 50.2-14L80 168.1 62.5 185z" opacity=".29"></path>
            <path
              fill="#2D3134"
              d="M293.4 276.3c-6.7-3.4-12.8-3.8-17.3-1.7l-9.5 5.1c-4.8 2.2-7.9 7.1-7.9 14.3 0 13.9 11.3 30.9 25.2 37.8 6.9 3.4 13.1 3.8 17.7 1.6 0 0 9.4-5 10.4-5.6 4.1-2.4 6.6-7.1 6.6-13.6 0-14-11.3-30.9-25.2-37.9z"
            ></path>
            <path
              d="M301.9 333.3c1.8-.9 9.2-4.9 10.1-5.5 4.1-2.4 6.6-7.1 6.6-13.6 0-5.6-1.8-11.7-4.9-17.4l-9.5 5.1c3.1 5.7 4.9 11.8 4.9 17.4.1 6.8-2.7 11.7-7.2 14z"
              opacity=".29"
            ></path>
            <path
              fill="#2D3134"
              d="M309.2 319.3c0 13.9-11.3 19.6-25.2 12.6-13.9-7-25.2-23.9-25.2-37.8s11.3-19.6 25.2-12.6c13.9 6.9 25.2 23.9 25.2 37.8z"
            ></path>
            <path
              fill="#E5E5E5"
              d="M303.7 316.5c0 10.9-8.8 15.3-19.7 9.9-10.9-5.4-19.7-18.7-19.7-29.6 0-10.9 8.8-15.3 19.7-9.9 10.8 5.5 19.7 18.7 19.7 29.6z"
            ></path>
            <g fill="#2D3134">
              <path d="M296.9 325.3c3-1.7 4.8-5 4.8-9.7v-1.1l-11-1.7 6.2 12.5zM288.1 303.6l11.5 2.5c-2.4-5.7-6.7-11.3-11.9-14.9l.4 12.4zM279.9 299.5l.4-12c-5.2-1.5-9.5-.3-11.9 3l11.5 9zM266.3 296.7v1.1c0 4.7 1.8 9.8 4.8 14.5l6.3-6.2-11.1-9.4zM284 314.2l-6.8 5.5c2.1 1.9 4.4 3.5 6.8 4.7 2.4 1.2 4.7 1.9 6.8 2l-6.8-12.2z"></path>
            </g>
            <path
              d="M309.2 319.3c0 13.9-11.3 19.6-25.2 12.6-13.9-7-25.2-23.9-25.2-37.8s11.3-19.6 25.2-12.6c13.9 6.9 25.2 23.9 25.2 37.8z"
              opacity=".11"
            ></path>
            <path
              fill="#2D3134"
              d="M101.3 179.6c-6.7-3.4-12.8-3.8-17.3-1.7l-9.5 5.1c-4.8 2.2-7.9 7.1-7.9 14.3 0 13.9 11.3 30.9 25.2 37.8 6.9 3.4 13.1 3.8 17.7 1.6 0 0 9.4-5 10.4-5.6 4.1-2.4 6.6-7.1 6.6-13.6 0-14-11.3-30.9-25.2-37.9z"
            ></path>
            <path
              d="M109.8 236.6c1.8-.9 9.2-4.9 10.1-5.5 4.1-2.4 6.6-7.1 6.6-13.6 0-5.6-1.8-11.7-4.9-17.4l-9.5 5.1c3.1 5.7 4.9 11.8 4.9 17.4 0 6.8-2.7 11.6-7.2 14z"
              opacity=".29"
            ></path>
            <path
              fill="#2D3134"
              d="M117 222.5c0 13.9-11.3 19.6-25.2 12.6-13.9-7-25.2-23.9-25.2-37.8 0-13.9 11.3-19.6 25.2-12.6 14 7 25.2 23.9 25.2 37.8z"
            ></path>
            <path
              fill="#E5E5E5"
              d="M111.5 219.8c0 10.9-8.8 15.3-19.7 9.9S72.1 211 72.1 200.1c0-10.9 8.8-15.3 19.7-9.9s19.7 18.7 19.7 29.6z"
            ></path>
            <g fill="#2D3134">
              <path d="M104.8 228.5c3-1.7 4.8-5 4.8-9.7v-1.1l-11-1.7 6.2 12.5zM95.9 206.8l11.5 2.5c-2.4-5.7-6.7-11.3-11.9-14.9l.4 12.4zM87.7 202.7l.4-12c-5.2-1.5-9.5-.3-11.9 3l11.5 9zM74.1 199.9v1.1c0 4.7 1.8 9.8 4.8 14.5l6.3-6.2-11.1-9.4zM91.8 217.5 85 223c2.1 1.9 4.4 3.5 6.8 4.7 2.4 1.2 4.7 1.9 6.8 2l-6.8-12.2z"></path>
            </g>
            <path
              d="M117 222.5c0 13.9-11.3 19.6-25.2 12.6s-25.2-23.9-25.2-37.8c0-13.9 11.3-19.6 25.2-12.6 14 7 25.2 23.9 25.2 37.8z"
              opacity=".11"
            ></path>
            <path
              fill="#F8EBCB"
              d="M447.1 214c-4.5-4.7-57.2-46.1-66.7-53.4-9.5-7.2-80.5-55.4-114.2-57.4s-40.5-.9-54.3-4.5c-13.8-3.6-44.5-11.3-91.3 4.1S43.9 147.3 43.9 171c0 8 1.6 16.1 12.4 24.9 1.8 1.5 4.6 3.4 7.9 5.5-.2-1.5-.4-3-.4-4.5 0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 3.2-.6 6.1-1.7 8.6l140.3 68.7c-.4-2-.6-3.9-.6-5.8 0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 1.8-.2 3.5-.5 5.1 5.4 1.6 12.9 3.3 22 4.2 20.3 2 53.6-4.1 83.4-19.9 34-18 47.3-35.3 48.8-44.3 1.7-9-12.1-45.2-16.6-49.9z"
            ></path>
            <path
              fill="#F8EBCB"
              d="M447.1 214c-4.5-4.7-57.2-46.1-66.7-53.4-9.5-7.2-80.5-55.4-114.2-57.4s-40.5-.9-54.3-4.5c-13.8-3.6-44.5-11.3-91.3 4.1S43.9 147.3 43.9 171c0 8 1.6 16.1 12.4 24.9 1.8 1.5 4.6 3.4 7.9 5.5-.2-1.5-.4-3-.4-4.5 0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 3.2-.6 6.1-1.7 8.6l140.3 68.7c-.4-2-.6-3.9-.6-5.8 0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 1.8-.2 3.5-.5 5.1 5.4 1.6 12.9 3.3 22 4.2 20.3 2 53.6-4.1 83.4-19.9 34-18 47.3-35.3 48.8-44.3 1.7-9-12.1-45.2-16.6-49.9z"
            ></path>
            <path
              d="M196.1 215.1c0 2.9-2.4 4.1-5.3 2.7-2.9-1.5-5.3-5-5.3-8 0-2.9 2.4-4.1 5.3-2.7 2.9 1.5 5.3 5 5.3 8z"
              opacity=".2"
            ></path>
            <path
              fill="#F8EBCB"
              d="m196.1 217.6 2.3-2.6s-16.7-10.9-18.2-8.7c-1.6 2.1 15.9 11.3 15.9 11.3z"
            ></path>
            <path
              d="M270.3 246.6c0 2.9-2.4 4.1-5.3 2.7-2.9-1.5-5.3-5-5.3-8s2.4-4.1 5.3-2.7c2.9 1.5 5.3 5.1 5.3 8z"
              opacity=".2"
            ></path>
            <path
              fill="#F8EBCB"
              d="m270.3 249.2 2.3-2.6s-16.7-10.9-18.2-8.7c-1.5 2.1 15.9 11.3 15.9 11.3z"
            ></path>
            <path
              fill="#2D3134"
              d="m126.4 172.1 169.8 70.8s-16.5-60-71.2-82.1c-58.8-23.7-98.6 11.3-98.6 11.3z"
            ></path>
            <path
              fill="#656565"
              d="m145 176 60.7 25.3 21.1-35.7c-1-.5-2.1-.9-3.2-1.3-13.1-5.3-26.3-8-39.3-8-13.1 0-24.3 2.8-33.2 6.2L145 176zM218.1 206.4l66.9 27.9 1.8-5.8c-2.2-4.9-5.2-10.6-8.9-16.6-8.4-13.5-22.3-30.9-43.4-42.5l-16.4 37z"
            ></path>
            <path
              fill="#2D3134"
              d="M262.5 105.4c1.5-2.4-46.1-2.4-58.6-.8-12.5 1.7-33.3 6.2-52.2 16.6-16 8.8-40.4 30-27.6 32.6 12.8 2.6 63-10.7 64.8-11.8 1.8-1.1 17.8-15.2 35.1-23.4s37.7-12 38.5-13.2z"
            ></path>
            <path
              fill="#656565"
              d="M254.8 106c.2-.1.5-.1.7-.2-4.6-.3-11.7-.5-20.9-.5-5.8 0-11.5.1-16.4.3-18.8 4.8-39.3 12.1-51.4 17.9-15.5 7.4-30.2 16.4-37.5 28.8 17.1-.4 56.4-10.8 58.8-11.9.3-.2 1.4-1.1 2.6-2 5.6-4.5 18.7-14.9 32.7-21.4 11.2-5.3 23.8-8.9 31.4-11z"
            ></path>
            <path
              fill="#2D3134"
              d="M374 162.8c8.6.6 22.6 13.6 28 17.9 5.4 4.4 23.1 15.8 11.2 29.7-11.9 13.9-31.4 22.6-49.4 27.3-18.1 4.7-33.5 7.2-44.2-1.8-10.7-9-17.6-23.4-19.4-26.8s-4.7-7.7 4.4-15.1c10.5-8.6 48.9-32.6 69.4-31.2z"
            ></path>
            <path
              fill="#656565"
              d="M374 164.5c8.2.5 21.5 12.9 26.7 17.1 5.2 4.2 22 15.1 10.6 28.3-11.3 13.2-29.8 21.5-47.1 26-17.2 4.4-31.9 6.9-42-1.7s-16.8-22.2-18.5-25.5-4.5-7.3 4.2-14.3c10-8.3 46.5-31.1 66.1-29.9z"
            ></path>
            <path
              d="M415 198.9c-1.3-8.1-10.7-14.3-14.3-17.2-5.2-4.2-18.5-16.5-26.7-17.1-19.5-1.3-56.1 21.5-66.1 29.7-4.8 3.9-6.1 6.9-6 9.3a239.2 239.2 0 0 1 113.1-4.7z"
              opacity=".2"
            ></path>
            <path
              fill="#CC291F"
              d="M343.9 298.9s5 2 8.7 1.1c3.8-.9 19.6-6.3 19.6-6.3s-6.6-23.2-13.9-29.2c-7.2-6-15.5-5.1-17.2-4.1-1.6 1 .7 35.6 2.8 38.5zM446.8 256.1s12.4-6.9 12.4-9.8c0-2.9-5.4-24.9-9.3-29.5s-7.2-7.2-8.7-6.3c-1.6.8 5.5 44.2 5.6 45.6z"
            ></path>
            <path
              fill="#2D3134"
              d="M388.9 265.1c1.5-2.9 36.5-20.2 38.6-19.4s3 15.5.5 18.8c-2.6 3.3-27.7 17.3-32.6 16.4s-7.8-13.2-6.5-15.8z"
            ></path>
            <path
              fill="#E5E5E5"
              d="m395.1 263.5 2.7 13.7 25.8-13.3-2.7-13.5z"
            ></path>
            <path
              fill="#2D3134"
              d="m372.2 293.6 2.9 5s19.9-6.3 38.4-16c18.5-9.6 33.9-21 33.9-21l-.6-5.6s-13.6 10.9-34.2 21.4c-19.6 10.1-40.4 16.2-40.4 16.2z"
            ></path>
            <path
              fill="#FFF"
              d="m65.4 158.1 61 14 169.8 70.8 44.3 30.8s-72.8-24.2-137.5-54.3-137.6-61.3-137.6-61.3z"
              opacity=".3"
            ></path>
            <path
              d="M285.3 238.6c-9.5 12.7-34.7 45.9-37.6 47.1-.8.1-6.9-1.6-44.4-19.4-1-1.5-3.1-14.4-1.7-30.5 1.4-17.5 9-28.2 9.1-28.3l-.7-.5c-.1.1-7.8 11-9.3 28.8-1.2 14.3.3 26.2 1.5 30-4.8-2.3-10.1-4.8-16-7.6-29.9-14.4-58.9-28.8-59.9-29.5-1.9-1.3-7.5-12.8-6.8-29.9.7-16.6 7.3-26.1 7.3-26.2l-.7-.5c-.1.1-6.8 9.8-7.5 26.7-.7 17.3 4.9 29.1 7.2 30.7 1.2.9 31.6 15.9 60.5 29.8 52.4 25.2 60 27.5 61.5 27.5.2 0 .3 0 .4-.1 3.7-1.6 36.5-45.5 37.9-47.4l-.8-.7z"
              opacity=".2"
            ></path>
            <path
              fill="#2D3134"
              d="M298.5 204.9c-9.2-21.2-67.9-69.4-112-62.3l-.2-1.3c26.7-4.3 55.5 11.2 70.2 20.8 20.1 13.1 38.2 30.8 43.2 42.3l-1.2.5zM379.1 165.7c-39.5-27-92.3-59.3-119.3-59.9v-1.4c27.3.6 80.4 33 120.1 60.1l-.8 1.2z"
            ></path>
            <path
              fill="#F8EBCB"
              d="m141 179.4 2.9-11.5s-5.1-2.6-6.9-1.2c-1.8 1.4-5.7 12.8-2.7 16.3s3.9 3.6 3.9 3.6l2.8-7.2z"
            ></path>
            <path
              d="M463.8 263.9c.4-2.3-.2-6.2-1.3-10.9-9.3 10.1-25.8 24.2-52.3 36.3-28.3 12.9-46.6 18-56.6 20.1.5 5 .3 13.4.5 18.2 18.4-2.2 40.4-8.5 60.8-19.3 34-18.1 47.3-35.3 48.9-44.4z"
              opacity=".29"
            ></path>
            <path
              d="M346.6 266.9c-2.3-8.1-20.5-12.8-35.3-26.7-13.5-12.6-30.3-58.9-80.9-80.2-51.5-21.6-85.8-.3-112.6 2.7-18.3 2-46.3-6.3-66.9-12.8-4.5 7.2-6.9 14.4-6.9 21.1 0 8 1.6 16.1 12.4 24.9 1.8 1.5 4.6 3.4 7.9 5.5-.2-1.5-.4-3-.4-4.5 0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 3.2-.6 6.1-1.7 8.6l140.3 68.7c-.4-2-.6-3.9-.6-5.8 0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 1.8-.2 3.5-.5 5.1 5.4 1.6 12.9 3.3 22 4.2 6.4.6 14 .5 22.4-.5-.8-39.8-5.7-54.9-7.4-60.7z"
              opacity=".11"
            ></path>
            <path
              fill="#E5E5E5"
              d="M62.2 157.2s-.5-8.8 1.8-12.4c2.3-3.6.8-8.9-1.9-8.3-3.2.7-12.6 13.5-13.1 16.4-.3 3 13.2 4.3 13.2 4.3z"
            ></path>
            <path
              d="M63.5 142.8c0 2.5-2 5.6-4.5 6.8-2.5 1.3-4.5.2-4.5-2.3s2-5.6 4.5-6.8c2.5-1.2 4.5-.2 4.5 2.3z"
              opacity=".2"
            ></path>
            <path
              fill="#FFF"
              d="M60.5 144.3c0 1.3-1.1 3-2.4 3.6-1.3.7-2.4.1-2.4-1.2s1.1-3 2.4-3.6c1.3-.7 2.4-.2 2.4 1.2zM60.8 150.6c0 1.3-1.1 3-2.4 3.6s-2.4.1-2.4-1.2 1.1-3 2.4-3.6 2.4-.1 2.4 1.2z"
              opacity=".4"
            ></path>
            <path
              fill="#FFF"
              d="m344.5 279.2 1.1 6.3 5.1.6 15.1-5.1-2.5-5.9-13.2 4.9zM445 234.1l9.2-6.3 1.9 5.3-9.7 7.5z"
              opacity=".8"
            ></path>
          </svg>
          BUYC CORP
        </a>
        <button
          id="color"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Color
              </a>
              <ul id="colorDropdown" className="dropdown-menu">
                <Drop name="Black" proper="color" onColorSelect={handleColorSelect} />
                <Drop name="Blue" proper="color"  onColorSelect={handleColorSelect} />
                <Drop name="Red" proper="color" onColorSelect={handleColorSelect} />
                <Drop name="Silver" proper="color" onColorSelect={handleColorSelect} />
                <Drop name="White" proper="color" onColorSelect={handleColorSelect} />
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Price
              </a>
              <ul id="orderDropdown" className="dropdown-menu">
                <Price name="ASC" proper="order" onPriceSelect={handlePriceSelect} />
                <Price name="DESC" proper="order" onPriceSelect={handlePriceSelect} />
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mileage
              </a>
              <ul id="mileageDropdown" className="dropdown-menu">
                <Mile name="10000" proper="mileage" onMileageSelect={handleMileageSelect} />
                <Mile name="22000" proper="mileage" onMileageSelect={handleMileageSelect} />
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleInputChange}
              aria-label="Search"
            />
            <button style={{backgroundColor:'#FBF9F1', borderColor:'#FBF9F1', color:'Black'}} id="search" className="btn btn-outline-success" type="submit" onClick={handleSearchClick}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;