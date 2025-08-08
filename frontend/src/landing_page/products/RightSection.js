import React from 'react';
 
function RightSection({productName, productDescription, learnMore, imageURl}) {
    return (
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-1'></div>
                <div className='col-4 p-5 '>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="">
                        <a href={learnMore}>Learn More →</a>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-5 ml-5'>
                    <img src={imageURl} />
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
}

export default RightSection;