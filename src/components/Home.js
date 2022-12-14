import React, { Component } from "react";
import Navbar from "./Navbar";
import News from "./News";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={6} category="technology" country="in" />
      </div>
    );
  }
}
