import React from "react";

function App() {
  return (
    <div className="page-1">
      <div className="flex-col">
        <div className="flex-col-1">
          <div className="sd">
            SD
          </div>
          <Property1Frame1 />
          <Property1Frame1 className="component-1-1" />
          <div className="follow-me">
            Follow Me
          </div>
        </div>
        <div className="flex-row">
          <div className="entypo-socialgithub-with-circle">
            <img className="vector-4" src="vector.svg" />
          </div>
          <div className="instagram">
            <img className="vector-5" src="vector-1.svg" />
          </div>
          <div className="linkedin-in">
            <img className="vector-6" src="vector-2.svg" />
          </div>
        </div>
      </div>
      <div className="overlap-group-container">
        <div className="overlap-group1">
          <img className="x64000509-1" src="64000509-1.png" />
          <div className="application-developer">
            Application Developer
          </div>
          <h1 className="title">
            Subhasish Das
          </h1>
          <div className="frame-1">
            <img className="line-1" src="line-1.svg" />
            <img className="line" src="line-2.svg" />
            <img className="line" src="line-2.svg" />
          </div>
        </div>
        <div className="overlap-group2">
          <div className="hi-i-m-subasush-das">
            Hi, I m Subasush Das. Highly motivated versatile person, bringing proficient knowledge of multiple programming languages and
            frameworks including C, C++, Python, Java, Flask. I like designing &amp; building products that positively impact the lives of
            users. I don&#39;t associate myself with specific tools and technology. This mindset has helped me be a quick learner and
            concentrate more on solving the problem at hand.
          </div>
          <div className="more-about-me">
            MORE ABOUT ME
          </div>
          <Property1Frame12 />
        </div>
      </div>
    </div>
  );
}

export default App;

function Property1Frame1(props) {
  const { className } = props;

  return (
    <div className={`component-1 ${className || ""}`}>
      <div className="arrow-right">
        <img className="vector" src="vector-6.svg" />
        <img className="vector-1" src="vector-5.svg" />
      </div>
    </div>
  );
}

function Property1Frame12() {
  return (
    <div className="component-1-2">
      <div className="arrow-right-1">
        <div className="vector-container">
          <img className="vector-2" src="vector-4.svg" />
          <img className="vector-3" src="vector-3.svg" />
        </div>
      </div>
    </div>
  );
}