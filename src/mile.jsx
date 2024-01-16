import React,{useState} from "react";

function Mile({onMileageSelect,name}) {
    const handleMileageChange = (event) => {
         setMileage(event.target.value );
        
        if (onMileageSelect) {
            onMileageSelect(event.target.value);
          } else {
            throw new Error("onMileageSelect prop is required!");
          }
    };
    
    const [mileage, setMileage] = useState("All");
    return (
        <li className="d-flex align-items-center">
            <input
              type="radio"
              id={name}
              name="mileage"
              value={name}
              onChange={handleMileageChange}
              className="me-2"
            />
             <a className="dropdown-item" href="/#">
                  {name}
              </a>
       </li>
    );
}

export default Mile;

  