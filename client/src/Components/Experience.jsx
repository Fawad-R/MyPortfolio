import React,{ useEffect, useState } from 'react'
import ProgressBar from './ProgressBar/ProgressBar'
import axios from "axios";
const Experience = () => {
    let [state, updateState] = useState([]);
    let [state1, updateState1] = useState([]);
    let fetchEducation = async () => {
        let val = await axios.get('/education');
        updateState(val.data);
    }
    useEffect(() => {
        fetchEducation();
    }, [])
    let fetchExperience = async () => {
        let val = await axios.get('/experience');
        updateState1(val.data);
    }
    useEffect(() => {
        fetchExperience();
    }, [])

    return (
        <div><div className="container-xxl py-6 pb-5" id="skill">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="display-5 mb-5">Skills & Experience</h1>
                        <p className="mb-4">I am a final year cs student and working as a mern stack web developer.</p>
                        <h3 className="mb-4">My Skills</h3>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">HTML</h6>
                                        <h6 className="font-weight-bold">70%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"70"}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">CSS</h6>
                                        <h6 className="font-weight-bold">65%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"65"}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">javaScript</h6>
                                        <h6 className="font-weight-bold">60%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"60"}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">React</h6>
                                        <h6 className="font-weight-bold">65%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"65"}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Node</h6>
                                        <h6 className="font-weight-bold">60%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"60"}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Mongo db</h6>
                                        <h6 className="font-weight-bold">55%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"55"}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Express</h6>
                                        <h6 className="font-weight-bold">55%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"55"}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Wordpress</h6>
                                        <h6 className="font-weight-bold">60%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"60"}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">C++</h6>
                                        <h6 className="font-weight-bold">35%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"35"}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">java</h6>
                                        <h6 className="font-weight-bold">35%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"35"}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Python</h6>
                                        <h6 className="font-weight-bold">25%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"25"}/>
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Php</h6>
                                        <h6 className="font-weight-bold">30%</h6>
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <ProgressBar percentage={"30"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                            <li className="nav-item w-50">
                                <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">Experience</button>
                            </li>
                            <li className="nav-item w-50">
                                <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">Education</button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row gy-5 gx-4">
                                    {/* <div className="col-sm-6">
                                <h5>UI Designer</h5>
                                <hr className="text-primary my-2" />
                                <p className="text-primary mb-1">From October 2021</p>
                                <h6 className="mb-0">Freelancing</h6>
                            </div> */}
                                    {/* <div className="col-sm-6">
                                <h5>Product Designer</h5>
                                <hr className="text-primary my-2" />
                                <p className="text-primary mb-1">2000 - 2045</p>
                                <h6 className="mb-0">Apex Software Inc</h6>
                            </div>
                            <div className="col-sm-6">
                                <h5>Web Designer</h5>
                                <hr className="text-primary my-2" />
                                <p className="text-primary mb-1">2000 - 2045</p>
                                <h6 className="mb-0">Apex Software Inc</h6>
                            </div> */}

                             {
                                state1.map((ele,ind)=>{
                                return(
                                    <div key={ele._id} className="col-sm-6">
                                        <h5>{ele.name}</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">{ele.date}</p>
                                        <h6 className="mb-0">{ele.platform}</h6>
                                    </div>
                             )       })}
                               </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row gy-5 gx-4">
                            {
                                state.map((ele,ind)=>{
                                return(
                                    <div key={ele._id} className="col-sm-6">
                                        <h5>{ele.name}</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">{ele.date}</p>
                                        <h6 className="mb-0">{ele.platform}</h6>
                                    </div>
                             )       })}
                                    {/* <div className="col-sm-6">
                                        <h5>Freelancing</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">June 2021 - September 2021</p>
                                        <h6 className="mb-0">Digiskills</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Wordpress</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">October 2021 - December 2021</p>
                                        <h6 className="mb-0">Digiskills</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>MERN</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">January 2022 - July 2022</p>
                                        <h6 className="mb-0">Youtube/Coursera</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Bachelors in computer sciences</h5>
                                        <hr className="text-primary my-2" />
                                        <p className="text-primary mb-1">2020 - 2024</p>
                                        <h6 className="mb-0">Riphah International University</h6>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Experience