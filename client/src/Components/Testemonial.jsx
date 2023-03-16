import React from 'react'

const Testemonial = () => {
  return (
    <div>
        <div className="container-fluid bg-light py-5 my-5" id="testimonial">
                <div className="container-fluid py-5">
                    <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="testimonial-left h-100">
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="img/testimonial-1.jpg" alt="" />
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="img/testimonial-2.jpg" alt="" />
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="img/testimonial-3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-1.jpg" alt="" />
                                        <div className="testimonial-icon">
                                            <i className="fa fa-quote-left text-primary"></i>
                                        </div>
                                    </div>
                                    <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <hr className="w-25 mx-auto" />
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-2.jpg" alt="" />
                                        <div className="testimonial-icon">
                                            <i className="fa fa-quote-left text-primary"></i>
                                        </div>
                                    </div>
                                    <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <hr className="w-25 mx-auto" />
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-5">
                                        <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-3.jpg" alt="" />
                                        <div className="testimonial-icon">
                                            <i className="fa fa-quote-left text-primary"></i>
                                        </div>
                                    </div>
                                    <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <hr className="w-25 mx-auto" />
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="testimonial-right h-100">
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="img/testimonial-1.jpg" alt="" />
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="img/testimonial-2.jpg" alt="" />
                                <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="img/testimonial-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default Testemonial