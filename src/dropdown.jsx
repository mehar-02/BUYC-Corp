import React,{useState} from "react";

function Drop({onColorSelect,name}) {
    const [color, setColor] = useState("All");
    
    const handleColorChange = (event) => {
        setColor(event.target.value );
        onColorSelect(name);
    };
    
    
    return (
        <li className="d-flex align-items-center">
            <input
              type="radio"
              id={name}
              name="color"
              value={name}
              onChange={handleColorChange}
              className="me-2"
            />
             <a className="dropdown-item" href="/#">
                  {name}
              </a>
       </li>
    );
}

export default Drop;

  