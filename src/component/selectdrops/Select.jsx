import React, { useState } from 'react';
import '../selectdrops/Select.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ClickAwayListener from '@mui/material/ClickAwayListener';



function Select(props) {
  // State to track if the dropdown is open or closed
  const [open, setOpen] = useState(false);
  // State to store the selected item
  const [selectedItem, setSelectedItem] = useState(null);
  const[listData, setListData]=useState(props.data);
  
  const handleSelectItem = (item) => {
    setSelectedItem(item);  // Update selected item
    setOpen(false);  // Close the dropdown after selection
  };

  const filterList=(e)=>{
    const keyword=e.target.value.toLowerCase();
    const filterList=props.data.filter((item)=>
      item.toLowerCase().includes(keyword));
    setListData(filterList);
    };
    
     
  

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
    
    <div className="selectDrop cursor position-relative">
      
      {/* Display the selected item if it exists, otherwise show "All categories" */}
      <span
        className="openselect"
        onClick={() => setOpen(!open)} // Toggle open/close state on click
      >
        {selectedItem ? selectedItem : props.placeholder} < ArrowDropDownIcon className='arrow' />
      </span>

      {/* Conditionally render the dropdown menu based on the 'open' state */}
      {open && (
        <div className="selectdrop">
          <div className="searchfield">
            <input type="text" placeholder="Search..." onChange={filterList} />
          </div>
          <ul className="searchResult">
          <li
                key="placeholder"
                onClick={() => handleSelectItem(props.placeholder)} // Select placeholder
                className={selectedItem === props.placeholder ? 'selected' : ''}
              >
                {props.placeholder}
              </li>

            {
              listData.map((item,index)=>{
                return(
                  <li
                    key={index+1}  // Ensure unique key for each list item
                    onClick={() => handleSelectItem(item)}  // Use dynamic 'item' value
                    className={selectedItem === item ? 'selected' : ''}
                  >
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>
        
      )}
    
    </div>
    
    </ClickAwayListener>
  );
}

export default Select;
