import { useState } from "react";
import "./count.css";

const Count = () => {
  const listCount = [ -100, -20, -1, +1, +20, +100 ];
  const [ countUp, setCountUp ] = useState(0);

  const mountCount = (index: any) => {
    return setCountUp(countUp + index);
  };

  const createBtn = (number: any) => {
    return <button onClick={() => mountCount(number)}>{number}</button>;
  };

  return (
        <div className="count">
            <h1>{countUp}</h1>
            <div className="btn">{listCount.map((num) => createBtn(num))}</div>
        </div>
    );
}

export default Count;