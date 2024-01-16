import React,{useState} from "react";

function Price({onPriceSelect,name}) {
    const handlePriceChange = (event) => {
        
        const selectedValue = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive check

        if (selectedValue === "asc" || selectedValue === "desc") {
            setPrice(selectedValue);
            console.log(selectedValue);
            onPriceSelect(selectedValue);
        }
    };
    
    const [price, setPrice] = useState("");
    return (
        <li className="d-flex align-items-center">
            <input
              type="radio"
              id={name}
              name="price"
              value={name}
              onChange={handlePriceChange}
              className="me-2"
            />
             <a className="dropdown-item" href="/#">
                  {name}
              </a>
       </li>
    );
}

export default Price;

  