import React, { useState } from "react";

const Checkbox = (checkedState) => {
  const [checkValue, setCheckedValue] = useState(checkedState);

  const checkHandler = (event) => {
    setCheckedValue(event.target.checked);
  };

  return <input type="checkbox" checked={checkValue} onChange={checkHandler} />;
};

export default Checkbox;
