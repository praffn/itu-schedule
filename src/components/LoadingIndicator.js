import React, { Component } from "react";
import Lottie from "lottie-web";

import loadingindicator from "../animations/loadingindicator.json";

export default class LoadingIndicator extends Component {
  constructor(props) {
    super(props);
    this.lottieContainer = React.createRef();
  }

  render() {
    return (
      <div className="LoadingIndicator">
        <div ref={this.lottieContainer} />
      </div>
    );
  }

  componentDidMount() {
    if (!this.lottieContainer.current) return;
    Lottie.loadAnimation({
      container: this.lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingindicator
    });
  }
}
