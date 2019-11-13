import React, { Component } from "react";
import { connect } from "react-redux";
class Question extends Component {
  componentDidMount() {
    this.props.getQuestion();
  }
  render() {
    console.log(this.props);
    return <div>Kalai</div>;
  }
}

const getQuestion = () => {
  fetch("https://opentdb.com/api.php?amount=10&category=27&type=multiple", {
    method: "get"
  })
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      console.log(jsonData);
    });
};

const mapStateToProps = state => {
  return {
    question: state.question
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestion: () => dispatch(getQuestion())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
