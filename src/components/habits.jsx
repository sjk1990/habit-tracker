import React, { Component } from "react";
import HabbitAddForm from "./habbitAddForm";
import Habit from "./habit";

class Habits extends Component {
  render() {
    return (
      <div className="habits">
        <HabbitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
