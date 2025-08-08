import React from 'react';
 
function Team() {
    return (
        <div className="container text-muted">
            <h1 className="text-center fs-3 text-muted mb-5">People</h1>
            <div className="row">
                <div className='col-2'></div>
                <div className='col-3 text-center'>
                    <img src="media/images/nithinkamath.jpg" alt="nithinkamath.jpg" style={{borderRadius : "100% ", width : "100%"}}/>
                    <h3 className='fs-5 mt-4'>Nithin Kamath</h3>
                    <h3 className='fs-6 mt-4'>Founder, CEO</h3>
                </div>
                <div className='col-6 p-5'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                   
                    <p>Playing basketball is his zen.</p>
                  
                    <p>Connect on <a href="" style={{textDecoration : "none"}}> Homepage </a></p>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    );
}

export default Team;