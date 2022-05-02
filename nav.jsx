import React from "react";

function App() {
  return <Nav {...navData} />;
}

export default App;

function Nav(props) {
  const { number1, number2, number3, number4, number5, place1, about, surname, place2, connect, close } = props;

  return (
    <div className="container-center-horizontal">
      <div className="navscreen">
        <div className="group-6">
          <div className="overlap-groupmontserrat-semi-bold-white-20px">
            <div className="number">
              {number1}
            </div>
            <div className="number-1">
              {number2}
            </div>
            <div className="number-2">
              {number3}
            </div>
            <div className="number-3">
              {number4}
            </div>
            <div className="group-5montserrat-semi-bold-white-20px">
              <div className="flex-row">
                <div className="number-4">
                  {number5}
                </div>
                <div className="place">
                  {place1}
                </div>
              </div>
              <div className="about">
                {about}
              </div>
              <div className="surname">
                {surname}
              </div>
              <div className="place-1">
                {place2}
              </div>
              <div className="connect">
                {connect}
              </div>
            </div>
          </div>
        </div>
        <div className="group-4">
          <div className="group-container">
            <div className="group-2">
              <img className="line-1" src="line-1-1.svg" />
            </div>
            <div className="group-3">
              <img className="line-1-1" src="line-1-2.svg" />
            </div>
          </div>
        </div>
        <div className="close">
          {close}
        </div>
      </div>
    </div>
  );
}

const navData = {
  number1: "02",
  number2: "03",
  number3: "04",
  number4: "05",
  number5: "01",
  place1: "Home",
  about: "About",
  surname: "Case Studies",
  place2: "Contact",
  connect: "Connect",
  close: "Close",
};