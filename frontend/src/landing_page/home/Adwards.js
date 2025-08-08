import React from 'react';
 
function Adwards() {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-6 p-5"><img src="media/images/largestBroker.svg"></img></div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest Stock Broker In India</h1>
                    <p className="mb-5">
                        2+ millions Zerodha clients contribute to over 15% of all retail order volumes in India  daily by trading and nvesting in :
                    </p>
                    <div className="row">
                        <div className="col-6">
                        <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>currency derivatives</p>
                        </li>
                        </ul>
                        </div>
                        <div className="col-6">
                        <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds & Government securities</p>
                        </li>
                        </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Adwards;