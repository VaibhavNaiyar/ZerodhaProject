import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h3>Pricing</h3>
                <h4 className='text-muted mt-3'>Free epuity investment and flat ₹20 traday and F&O trades</h4>
            </div>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <div className='col-4 p-5'>
                    <img src="media\intradayTrades.svg"></img>
                    <h3>Free equity delivery</h3>
                    <p className='text-muted'> All equity investments (NSE, BSE), are absolute free - ₹ 0 brokerage. </p>
                </div>
                <div className='col-4 p-5'>
                <img src="media\pricingEquity.svg"></img>
                <h3>Intraday and F&O trades</h3>
                <p className='text-muted'> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. </p>
                </div>
                <div className='col-4 p-5'>
                <img src="media\intradayTrades.svg"></img>
                <h3>Free direct MF</h3>
                <p className='text-muted'> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;