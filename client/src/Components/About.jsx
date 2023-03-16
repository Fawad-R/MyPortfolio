import React from 'react'
import img1 from './main1.jpg'
import img2 from './main2.jpg'
import img3 from './main3.jpg'
const About = () => {
  return (
    <div><div className="container-xxl py-6" id="about">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="d-flex align-items-center mb-5">
                    <div className="years flex-shrink-0 text-center me-4">
                        <h1 className="display-1 mb-0">1+</h1>
                        <h5 className="mb-0">Years</h5>
                    </div>
                    <h3 className="lh-base mb-0">of working experience as a web designer & developer</h3>
                </div>
                {/* <p className="mb-4">I am working as a mern stack web developer </p> */}
                <p className="mb-4">Fawad is a skilled MERN stack developer with a strong background in JavaScript programming, He is proficient in using the MERN stack technologies to build scalable and robust web applications.</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Afordable Prices</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>High Quality Product</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>On Time Project Delivery</p>
                <a className="btn btn-primary py-3 px-5 mt-3" href="https://github.com/Fawad-R">Read More</a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="row g-3 mb-4">
                    <div className="col-sm-6">
                        <img className="img-fluid rounded" src="img/about-1.jpg" alt="" />
                        {/* <img className="img-fluid rounded" src={img3} alt="" /> */}
                    </div>
                    <div className="col-sm-6">
                        {/* <img className="img-fluid rounded" src="img/about-2.jpg" alt="" /> */}
                        <img className="img-fluid rounded" src={img3} alt="" />
                        {/* <img className="img-fluid rounded" src={img2} alt="" /> */}
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    {/* <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
                    <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up"></h2> */}
                </div>
                {/* <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p> */}
                <div className="d-flex align-items-center mb-3">
                    <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
                    <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">8+</h2>
                </div>
                <p className="mb-0">I have developed 8 MERN projects and 50+ in HTML CSS<br/> JavaScript React & Wordpress</p>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default About