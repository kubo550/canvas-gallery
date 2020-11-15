import React from "react";

const ColorsPalette = ({ color, setColor }) => {
  // prettier-ignore
  const colors = [ 
    "rgb(0, 0, 0)", "rgb(120, 120, 120)", "rgb(121, 3, 0)", "rgb(10, 0, 120)", "rgb(123, 0, 121)",
    "rgb(11, 210, 65)", "rgb(117, 121, 0)", "rgb(0, 121, 0)", "rgb(0, 120, 120)", "rgb(210, 65, 120)",
    "rgb(45, 85, 144)", "rgb(123, 121, 56)", "rgb(0, 55, 55)", "rgb(40, 110, 254)",
    // ? row
    "rgb(255, 255, 255)", "rgb(187, 187, 187)", "rgb(255, 14, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 11)",
    "rgb(0, 254, 254)", "rgb(52, 0, 254)", "rgb(254, 0, 254)", "rgb(253, 253, 122)", "rgb(0, 255, 123)",
    "rgb(118, 255, 255)", "rgb(130, 112, 254)", "rgb(255, 6, 120)", "rgb(255, 125, 65)"
  ];
  const style = {
    display: 'grid',
    gridTemplate: 'repeat(2, 15px) / repeat(14, 15px)',
    gridGap: '2px'
  }
  return (
    <div className="colors" style={{display: 'flex'}}>
    <div className="current-color" style={{backgroundColor: color, width:30, height:30, margin:'1px 3px 1px 1px'}}>  </div>

    <div className='colors-palette' style={style}>
      {colors.map(color => (
        <button
          key={color}
          value={color}
          className='color-element'
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
      ></button>
      ))}
      
    </div>
    </div>
    
  );
};

export default ColorsPalette;
