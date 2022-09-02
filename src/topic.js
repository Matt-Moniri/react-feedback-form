import { Component } from "react";
const emojis = ["😦", "😞", "😐", "🙂", "😁"];

class Topic extends Component {
  render() {
    return (
      <div>
        <h3 style={{ marginBottom: "0.2em" }}>{this.props.topic}</h3>
        {emojis.map((emoji, index) => (
          <span
            key={index}
            onClick={() => this.props.handleClick(index, this.props.topic)}
            style={{
              backgroundColor: `${
                index === this.props.clicked ? "red" : "white"
              }`,
              cursor: "pointer",
              userSelect: "none",
              borderStyle: "solid",
              borderColor: "black",
              borderWidth: "1px",
              margin: "1px",
              fontSize: "1.5em",
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    );
  }
}
export default Topic;
