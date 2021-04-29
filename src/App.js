import React from "react";
import "./App.css";
import TopSection from "./components/top-section.js";
import UserSection from "./components/user-section.js";
import TopImageDesktop from "./images/bg-pattern-top-desktop.svg";
import TopImageMobile from "./images/bg-pattern-top-mobile.svg";
import BottomImageDesktop from "./images/bg-pattern-bottom-desktop.svg";
import BottomImageMobile from "./images/bg-pattern-bottom-mobile.svg";

function App() {
  return (
    <div>
      <picture>
        <source media="(min-width: 700px)" srcset={TopImageDesktop} />
        <source media="(min-width: 350px)" srcset={TopImageMobile} />
        <img className="top-img" src={TopImageDesktop} alt="cloud-top" />
      </picture>

      <TopSection />
      <UserSection />

      <picture>
        <source media="(min-width: 700px)" srcset={BottomImageDesktop} />
        <source media="(min-width: 350px)" srcset={BottomImageMobile} />
        <img
          className="bottom-img"
          src={BottomImageDesktop}
          alt="cloud-bottom"
        />
      </picture>
    </div>
  );
}
export default App;
