import React from 'react'

const Team = () => {
  return (
    <div>
        <div className="container-xxl py-6 pb-5" id="team">
                <div className="container">
                    <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-0">Team Members</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <a className="btn btn-primary py-3 px-5" href="">Contact Us</a>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded" src="img/team-1.jpg" alt="" />
                                <div className="team-text bg-white rounded-end p-4">
                                    <div>
                                        <h5>Full Name</h5>
                                        <span>Designer</span>
                                    </div>
                                    <i className="fa fa-arrow-right fa-2x text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded" src="img/team-2.jpg" alt="" />
                                <div className="team-text bg-white rounded-end p-4">
                                    <div>
                                        <h5>Full Name</h5>
                                        <span>Designer</span>
                                    </div>
                                    <i className="fa fa-arrow-right fa-2x text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded" src="img/team-3.jpg" alt="" />
                                <div className="team-text bg-white rounded-end p-4">
                                    <div>
                                        <h5>Full Name</h5>
                                        <span>Designer</span>
                                    </div>
                                    <i className="fa fa-arrow-right fa-2x text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default Team