import React, { useState, useRef, useCallback, useEffect } from "react";
import "/home/sjkim/project/habit-tracker/src/app.css";

//react hooks
const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  //React.createRef() 대신 hook에선 useRef 사용 --> 재호출 방지
  const spanRef = useRef();

  //useCallback --> 재호출 방지 (사용시 주의필요)
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, []);

  //componentDidMount + componentDidUpdate
  //마지막 옵션으로 해당 요소가 변경될때만 호출, 빈배열-->mount에만 호출됨
  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
