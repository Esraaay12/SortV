import React, { Component } from "react";
import Toolbar from "./Toolbar/ToolbarContainer.js"
import Body from "./Body/BodyContainer.js"
import "./Main.css"

class Main extends Component {


  render() {
    return (
      <div>
        <Toolbar />
        <Body />
      </div>
    )
  }
}

export default Main;