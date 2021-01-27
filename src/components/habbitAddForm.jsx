import React, { PureComponent } from "react";

class HabbitAddForm extends PureComponent {
  //   원하는요소에 연결
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    // const name = event.target.inputTag.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = "";  <-- 동일한 기능 수행
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          //   name="inputTag" <-- name속성 이용해서 연결가능
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabbitAddForm;
