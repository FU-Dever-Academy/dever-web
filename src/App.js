import React, { Children, useEffect, useState } from "react";
import WebFont from "webfontloader";
import "./reset.css";
import "./index.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Introduction from "./components/Introduction";
import Departments from "./components/Departments";
import Honorary from "./components/Honorary";
import Activity from "./components/Activity";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App() {
  const [introductionPosition, setIntroductionPosition] = useState(0);
  const introductionPositionCallback = (childData) => {
    setIntroductionPosition(childData);
  };
  const [activityPosition, setActivityPosition] = useState(0);
  const activityPositionCallback = (childData) => {
    setActivityPosition(childData);
  };
  const [contactPosition, setContactPosition] = useState(0);
  const contactPositionCallback = (childData) => {
    setContactPosition(childData);
  };
  return (
    <>
      <div className="croll-smooth">
        <Header
          introductionPosition={introductionPosition}
          activityPosition={activityPosition}
          contactPosition={contactPosition}
        ></Header>
        <Banner></Banner>
        <Introduction refCallback={introductionPositionCallback}></Introduction>
        <Departments></Departments>
        <Honorary></Honorary>
        <Activity refCallback={activityPositionCallback}></Activity>
        <Questions refCallback={contactPositionCallback}></Questions>
        <Footer></Footer>
        <div className="w-full bg-white py-2">
          <div className="container lg-auto mx-auto pr-7 pl-7 text-slate-400">
            Designed by @ThangTVB
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
