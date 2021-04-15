import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
export default function NavBar() {
  let [viewString, setView] = useState("home");
  const changeView = (e) => {
    setView((viewString = e.target.id));
  };

  if (viewString === "home") {
    return (
      <div>
        <nav>
          <div className="logo">
            <span class="n-of-logo">N</span>
            <span class="m-of-logo">M</span>
          </div>

          <div class="nav-link-wrapper">
            <ol>
              <button id="home" onClick={changeView}>
                Home
              </button>
              <button id="about" onClick={changeView}>
                About
              </button>
              <button id="portfolio" onClick={changeView}>
                Portfolio
              </button>
              <button id="contact" onClick={changeView}>
                Contact
              </button>
            </ol>
          </div>
        </nav>
        <Home />
      </div>
    );
  }
  if (viewString === "about") {
    return (
      <div>
        <nav>
          <div className="logo">
            <span class="n-of-logo">N</span>
            <span class="m-of-logo">M</span>
          </div>

          <div class="nav-link-wrapper">
            <ol>
              <button id="home" onClick={changeView}>
                Home
              </button>

              <button id="about" onClick={changeView}>
                About
              </button>

              <button id="portfolio" onClick={changeView}>
                Portfolio
              </button>

              <button id="contact" onClick={changeView}>
                Contact
              </button>
            </ol>
          </div>
        </nav>
        <About />
      </div>
    );
  }
  if (viewString === "portfolio") {
    return (
      <div>
        <nav>
          <div className="logo">
            <span class="n-of-logo">N</span>
            <span class="m-of-logo">M</span>
          </div>

          <div class="nav-link-wrapper">
            <ol>
              <button id="home" onClick={changeView}>
                Home
              </button>

              <button id="about" onClick={changeView}>
                About
              </button>

              <button id="portfolio" onClick={changeView}>
                Portfolio
              </button>

              <button id="contact" onClick={changeView}>
                Contact
              </button>
            </ol>
          </div>
        </nav>
        <Portfolio />
      </div>
    );
  }
  if (viewString === "contact") {
    return (
      <div>
        <nav>
          <div className="logo">
            <span class="n-of-logo">N</span>
            <span class="m-of-logo">M</span>
          </div>

          <div class="nav-link-wrapper">
            <ol>
              <button id="home" onClick={changeView}>
                Home
              </button>

              <button id="about" onClick={changeView}>
                About
              </button>

              <button id="portfolio" onClick={changeView}>
                Portfolio
              </button>

              <button id="contact" onClick={changeView}>
                Contact
              </button>
            </ol>
          </div>
        </nav>
        <div>Contact Me</div>
      </div>
    );
  }
}
