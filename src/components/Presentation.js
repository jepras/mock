import React, { Component } from "react";
import Reveal from "reveal.js";

import { settings, initialState } from "../assets/config";
window.Reveal = Reveal;

export default class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }
  componentDidMount() {
    Reveal.initialize();
  }

  render() {
    return (
      <div>
        <div class="reveal">
          <div class="slides">
            <section>
              <h1>Slide 1</h1>
            </section>
            <section>
              <h1>Slide 2</h1>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
