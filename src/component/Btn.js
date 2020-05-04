import React, { useState } from 'react';


function Btn() {
  const [color, setColor] = useState(true);



  if (color) return <button className="mt-1" onClick={() => setColor(!color)}>Color</button>;
  if (!color) return <button className="mt-1" onClick={() => setColor(!color)}>색깔</button>;

}

export default Btn;