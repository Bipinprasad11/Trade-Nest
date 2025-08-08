import React from "react";

function Hero() {
  return (
    <div className="conatiner mt-5 text-center">
      <div className="row mt5 p-5">
        <div className="mb-4">
          <h1>Charges</h1>
          <p className="text-muted fs-5">List of all charges and taxes</p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted fs-7 p-3">
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted fs-7 p-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per
            <br /> executed order on intraday trades across
            <br />
            equity, currency, and commodity trades. Flat
            <br />
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted fs-7 p-3">
            All direct mutual fund investments are
            <br />
            absolutely free — ₹ 0 commissions & DP
            <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
