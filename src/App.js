import { Component } from "react";
import Topic from "./topic.js";
// create an object that contains names of topics and their scores. "-1" means un-scored.
const topics = { food: -1, service: -1, "Value of Money": -1 };

class App extends Component {
  state = topics;

  /**
   * This is the only handler function we have.
   * It takes a score related to the emoji clicked,
   * and a topic, then assignes the score to that topic in the "state"
   * After that the state is updated,
   * the callback function calculates the "total" value of the scores.
   *
   *  */
  handleClick = (score, topic) => {
    this.setState({ ...this.state, [topic]: score });
  };
  // this function calculates the total value of the scores
  total = () => {
    let total = 0;
    for (let topic in this.state) {
      if (this.state[topic] != -1) {
        // -1 means any emoji is not clicked in the field
        total += this.state[topic];
      }
    }
    return `${total}/12`;
  };
  render() {
    return (
      <div style={{ margin: "2em" }}>
        <h1 style={{ textAlign: "center" }}>Feed Back Form</h1>
        <h2>Let us know how we served you:</h2>

        {Object.keys(topics).map((topic, index) => {
          // topics is an object so we use its "keys array" for mapping
          return (
            // here I pass down props to the component Topic which is imported from "topic.js"
            <Topic
              key={index}
              topic={topic}
              handleClick={this.handleClick}
              clicked={this.state[topic]}
            />
          );
        })}

        {/* a function that uses state to calcute the total  */}
        <h2>Total={this.total()}</h2>
      </div>
    );
  }
}

export default App;
