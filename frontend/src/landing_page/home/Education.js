import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 mb-5'>
                    <img src='media/education.svg'></img>
                </div>
                <div className='col-6 mb-5'>
                    <h3 className='mb-3 mt-5'>Free and open market Education</h3>
                    <p className='mt-5 mb-2 text-muted'>Varsity, the largest online stock market education book in the world covering everything fromn the basics to advance trading .</p>
                    <a href='' style={{textDecoration:"none"}}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5 mb-3 text-muted'> Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;