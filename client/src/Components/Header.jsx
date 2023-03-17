import React, { useEffect, useState, useCallback } from 'react'
import img2 from './fawad.jpg'
import img from './fawad2.png'
import AnimatedText from 'react-animated-text-content';
import TypingAnimation from './TypingAnimation';
import axios from 'axios';
let typed_strings = "Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer"
const Header = () => {

    const textList = [
        'MERN STACK Web Developer ',
        // 'MERN',
        // 'STACK',
        // 'Web',
        // 'Developer ',
    ];
    // const textList = ['React Typing Animation', 'TypingAnimation', 'Continuous Typing Animation'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrentTextIndex(index => (index + 1) % textList.length);
    //   }, 3000);
    //   return () => clearInterval(interval);
    // }, [textList]);
    let DownloadCv = async (e) => {
        e.preventDefault();
        // let val = await axios.get('/DownloadCv')
        // console.log('DownloadCv', val);
        // fetch(val.data).then(response => {
        fetch('/DownloadCv').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'FawadRehman.pdf';
                alink.click();
            })
        })
    }
    // let PlayBtn = async (e) => {
    //     // e.preventDefault();
    //     <iframe width="420" height="315"
    //         src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1">
    //     </iframe>
    // }
    return (
        <div>
            <div className="container-fluid bg-light my-6 mt-0" id="home">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                            <h3 className="text-primary mb-3">I'm</h3>
                            <h1 className="display-3 mb-3">Fawad Rehman</h1>
                            <h2 className="typed-text-output fawadoutput d-inline"></h2>
                            <div className="typed-text typed_strings d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                            {/* <TypingAnimation text="Web developer" /> */}
                            <div>
                                <div>
                                    <h1>
                                        {/* Welcome to the{' '}
                                        <TypingAnimation
                                            text={textList[currentTextIndex]}
                                            speed={50}
                                            onClear={clearText}
                                            onComplete={animateNextText}
                                        />{' '} */}
                                        {/* Welcome to the{' '} */}
                                        <TypingAnimation text={textList[currentTextIndex]} speed={150} />{' '}

                                    </h1>
                                </div>
                            </div>

                            {/* <AnimatedText className="animated-paragraph" type="words" animation={{
                    typeSpeed: 100,
                    backSpeed: 20,
                    smartBackspace: false,
                    loop: true}} >
                            Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer
                            </AnimatedText> */}
                            {/* <div className="wrapper four">
                                    <div className="type">
                                        <h3 className="typing">Web Developer</h3>
                                    </div>
                                </div> */}



                            {/* <iframe width="420" height="315"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
                                    </iframe> */}
                            <div className="d-flex align-items-center pt-5">
                                <a href="" onClick={DownloadCv} className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                                {/* <a href="./Fawad Rehman.pdf" download  className="btn btn-primary py-3 px-4 me-5">Download CV</a> */}
                                <button type="button" className="btn-play" data-bs-toggle="modal"
                                    data-src="https://www.youtube.com/embed/W1LTmqJpjCs" data-bs-target="#videoModal">
                                    <span></span>
                                </button>                                
                                
                                <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <img className="img-fluid" src="img/profile.png" alt="" /> */}
                            <img className="img-fluid" src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header