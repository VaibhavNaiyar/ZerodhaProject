import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mb-5'>
                    <img src='media/largestBroker.svg' alt ='largestBroker'/>
                </div>
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all the volumes in India daily by trading and investing in :</p>
                    <div className='row'>
                        <div className='col-6'>
                            Content
                        </div>
                        <div className='col-6'>
                            Content
                        </div>
                    </div>
                    <img src='media/pressLogos.png' alt='presLogos'></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;