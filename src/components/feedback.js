import React, { Component } from "react";

class feedback extends Component {
  constructor(props) {
    super(props);

    this.displayData = [];

    this.state = {
      showData: this.displayData,
      Name: "",
      Department: "",
      Rating: "",
    };
    this.appendData = this.appendData.bind(this);
    this.setName = this.setName.bind(this);
    this.setDepartment = this.setDepartment.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  appendData() {
    this.displayData.push(
      <div className="append-data">
        Name: {this.state.name} | Department: {this.state.department} | Rating:{" "}
        {this.state.rating}
      </div>
    );

    this.setState({
      showData: this.displayData,
      name: "",
      department: "",
      rating: "",
    });
  }

  setName(s) {
    let getName = s.target.value;
    this.setState({
      name: getName,
    });
  }

  setDepartment(s) {
    let getDepartment = s.target.value;
    this.setState({
      department: getDepartment,
    });
  }

  setRating(s) {
    let getRating = s.target.value;
    this.setState({
      rating: getRating,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div id="box">
        <h2 className="head">EMPLOYEE'S FEEDBACK FORM</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>Name:{" "}
            <input type="text" value={this.state.name} onChange={this.setName} />
          </label>
          <label>
            Department:{" "}
            <input type="text" value={this.state.department} onChange={this.setDepartment} />
          </label>
          <label>
            Ratings:{" "}
            <input type="text" value={this.state.rating} onChange={this.setRating} />
          </label>
          <input type="submit" value="Submit" onClick={this.appendData} />
        </form>
<div id="saved-data">{this.displayData}</div>
      </div>
    );
  }
}

export default feedback;