import React from 'react';

function Teams() {
    return ( 
        <div className='container mt-5 border-top'>
            <div className='row p-3 mt-5 mb-5'>
                <h1 className='text-center mt-5'>People</h1>
            </div>
            <div className='row p-3 mt-5 mb-5'>
                <div className='col-6 p-5 text-center text-muted fs-5'>
                    <img src="media/vbv.png" style={{borderRadius: "100%", width:"50%" }} alt ="Vbv"></img>
                    <h4 className='mt-3'>Vaibhav Naiyar</h4>
                </div>
                <div className='col-6 p-3 text-muted fs-6'>
                <p>Hi, I'm Vaibhav Naiyar, a sophomore at SRM University, passionate about technology, innovation, and continuous learning. I'm always eager to explore new concepts, sharpen my skills, and take on challenges that push me beyond my comfort zone.
                </p>
<p>I have a keen interest in web development, software engineering, and problem-solving. Whether it's building interactive web applications with React, TypeScript, and Express.js or diving into data structures and algorithms, I am committed to expanding my knowledge and honing my craft.
</p>
<p>I believe in consistent growth—both personally and professionally. My goal is to learn, adapt, and innovate, always striving to improve and make a meaningful impact in the tech world.Playing football is my zen.
</p>

<p>
Let’s connect and build something amazing together!
<a href='https://www.linkedin.com/in/vaibhav-naiyar-07b817291/' style={{textDecoration:"None"}}>linkedin</a>
<a href='https://github.com/VaibhavNaiyar' style={{textDecoration:"None"}}>github</a>
</p>
                </div>
            </div>
        </div>
     );
}

export default Teams;