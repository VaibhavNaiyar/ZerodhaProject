import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row'>
                <h1 className='fs-1 text-muted'>To create a ticket, select a relevant topic </h1>
            </div>
            <div className='row'>
            <div className='col-4 mt-5 mb-5 p-3'>
                <h4> <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Resident individual </a><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Minorl </a><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Glossary</a><br/>
            </div>
            <div className='col-4 mt-5 mb-5 p-3'>
                <h4><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h4><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Your Profile </a><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Account modification </a><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository </a><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Nomination </a><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Transfer and conversion of securities</a><br/>
            </div>
            <div className='col-4 mt-5 mb-5 p-3'>
                <h4><i class="fa fa-bar-chart" aria-hidden="true"></i> Kite</h4><br />
                <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>IPO </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Trading FAQs </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Charts and orders </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Alerts and Nudgess</a><br/>
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>General</a><br/>
            </div>
            <div className='col-4 mt-5 mb-5 p-3'>
                <h4> <i class="fa fa-money" aria-hidden="true"></i> Funds</h4><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Add money </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Withdraw money</a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Add bank accounts </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>eMandates</a><br/>
            </div>
            <div className='col-4 mt-5 mb-5 p-3'>
                <h4><i class="fa fa-search" aria-hidden="true"></i>Console</h4><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Portfolio </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Corporate actions </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Funds statement</a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Reports</a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Profile</a><br/>
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Segments</a><br/>
                </div>
                <div className='col-4 mt-5 mb-5 p-3'>
                <h4><i class="fa fa-circle-o" aria-hidden="true"></i> Coin</h4><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Understanding mutual funds and Coin </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Coin app </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Coin web </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>Transactions and reports </a><br />
                    <a href=""  className="d-block mb-1" style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a><br/>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;