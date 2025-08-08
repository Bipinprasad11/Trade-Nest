import React from 'react';
 
function Brokerage() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='mb-3'>
                    <h1 className='fs-2'> Brokerage charges</h1>
                </div>
                <div className='col-7 text-muted '>
                    <li>₹100 per order for futures and options.</li>
                    <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    <div className='col-5'></div>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;