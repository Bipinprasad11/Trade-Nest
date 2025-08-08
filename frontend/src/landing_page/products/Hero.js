import React from 'react';
 
function Hero() {
    return (
        <div className='container text-center mt-5  p-5'>
           <div className=''>
            <h1 className='fs-3 '>Zerodha Products</h1>
            <p className='fs-4 '>Sleek, modern, and intuitive trading platforms</p>
            <p className='fs-6 '>Check out our <a href="" style={{textDecoration : "none"}}>investment offerings →</a></p>
           </div>
           <div className='p-5 border-bottom'></div>
        </div>
    );
}

export default Hero;