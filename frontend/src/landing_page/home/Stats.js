import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h2 className='fs-2 mb-5'>Trust with confidence</h2>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+lakh crore worth of equity investment</p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamafication" , or annoying push notifications. High quality apps that you use at your pace, the way uou like.</p>
                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific o your needs</p>
                    <h3 className='fs-4'>Do better with money </h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/ecosystem.png' style={{width:"90%"}}  alt ="Ecosystem"></img>
                    <div >
                    <a href=''>Expolre our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href=''>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;