import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-3'>The Zerodha Universe</h1>
                <p className='mb-5'>Extend your trading and investment experience even further with out partner platforms</p>
                <div className='col-4 p-3 mb-5'>
                    <img src="media/smallcaseLogo.png"></img>
                    <p className='text-small text-muted mt-3'> Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mb-5'>
                <img src="media/streakLogo.png" className="img-fluid" style={{ maxWidth: "100px", height: "auto" }} alt="Streak Logo" />
                <p className='text-small text-muted mt-3'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mb-5'>
                <img src="media/sensibullLogo.svg"></img>
                <p className='text-small text-muted mt-3'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mb-5'>
                    <img src="media/zerodhaFundHouse.png" className="img-fluid" style={{ maxWidth: "100px", height: "auto" }}></img>
                    <p className='text-small text-muted mt-3'>Asset management</p>
                </div>
                <div className='col-4 p-3 mb-5'>
                <img src="media/goldenpiLogo.png"></img>
                <p className='text-small text-muted mt-3'>Bonds trading platfrom</p>
                </div>
                <div className='col-4 p-3 mb-5'>
                <img src="media/dittoLogo.png" className="img-fluid" style={{ maxWidth: "100px", height: "auto" }} alt="Ditto Logo" />
                <p className='text-small text-muted mt-3'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%" , margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Universe;