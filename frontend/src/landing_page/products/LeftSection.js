import React from 'react';

function LeftSection({imageURL , productName, productDescription, tryDemo,learnMore,googlePlay, appstore}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src={imageURL}/>
                </div>
                <div className='col-6 p-3 mt-5'> 
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo}style={{marginRight: "50px", textDecoration: "none"}}>Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft: "50px", textDecoration: "none"}}>Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div>
                    <a href={googlePlay}><img src="media\googlePlayBadge.svg" /></a>
                    <a href={appstore}><img src="media/appstoreBadge.svg" style={{ marginLeft:"50px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;