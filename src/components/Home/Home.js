import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { Button } from "@material-ui/core";
class Home extends Component {
  render() {
    return (
      <>
        <header className="">
          <div className="header">
            <video
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source
                src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                type="video/mp4"
              />
            </video>
            <div className="header__overlay" />
            <div class="header__list">
              <div class="w-100 text-white header__content">
                <h1 class="display-3 ">Front End Developer</h1>
                <p class="lead">React, HTML5, CSS3, JavaScript ES6</p>
                <Link to="/porfolio">
                  <Button variant="contained" className="btn__porfolio">
                    Porfolio
                  </Button>
                </Link>
                <Button variant="contained" className="bg-danger">
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Home;
