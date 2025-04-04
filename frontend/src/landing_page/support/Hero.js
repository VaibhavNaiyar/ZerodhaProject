import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className=' p-3 ' id="supportWrapper">
                <h3>Support Portal</h3>
                <a href=''>Track tickets</a>
            </div>
            <div className='row p-3 mt-4'>
                <div className='col-6 p-5 '>
                <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder="Eg. how do i activate F&O" /><br />
                <a href="">Track account opening</a>
                <a href="">Track segment activation</a>
                <a href="">Intraday margins</a>
                <a href="">Kite user manual</a>
                </div>
                <div className='col-6 p-5 '>
                    <h1 className='fs-4'>Featured</h1>
                    <ol>
                        <li>
                        <a href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                        <a href="">Latest Intraday leverages -MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero; 