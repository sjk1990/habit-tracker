import React, { memo } from "react";

const HabbitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    // const name = event.target.inputTag.value;
    name && props.onAdd(name);
    // inputRef.current.value = "";  <-- 동일한 기능 수행
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        //   name="inputTag" <-- name속성 이용해서 연결가능
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabbitAddForm;
