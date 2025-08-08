import React from "react";

function Universe() {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <h1 className="fs-3">The Zerodha Universe</h1>
        <p className="fs-6 p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 text-muted" style={{ fontSize: "14px" }}>
          <img src="media/images/smallcaselogo.png" />
          <p className="p-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 text-muted" style={{ fontSize: "14px" }}>
          <img src="media/images/streaklogo.png" style={{ width: "35%" }} />
          <p className="p-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 text-muted" style={{ fontSize: "14px" }}>
          <img src="media/images/dittologo.png" style={{ width: "35%" }} />
          <p className="p-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3 text-muted mt-5" style={{ fontSize: "14px" }}>
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "45%" }}
          />
          <p className="p-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 text-muted mt-5" style={{ fontSize: "14px" }}>
          <img src="media/images/goldenpilogo.png" style={{ width: "45%" }} />
          <p className="p-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 text-muted mt-5" style={{ fontSize: "14px" }}>
          <img src="media/images/sensibullLogo.svg" style={{ width: "60%" }} />
          <p className="p-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs mt-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
