import React, { useEffect, useState } from 'react'
import axios from "axios";
const Projects = () => {
    let [state, updateState] = useState([]);
    let [state2, updateState2] = useState('All');
    let fetchProjects = async () => {
        let val = await axios.get('/projects');
        updateState(val.data);
        console.log('projects',val.data);
        updateState2('All');
    }
    useEffect(() => {
        updateState2('All');
        fetchProjects();
    }, [])
    let fetch_Specific_Projects=async(e)=>{
        // e.preventDefault();
        updateState2(e)
        // .flat()
        console.log('e',e);
        let val = await axios.get(`/projects/${e}`);
        console.log('sprojects',val.data);
        updateState(val.data);
    }
    return (
        <div> <div className="container-xxl py-6 pt-5" id="project">
            <div className="container">
                <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-lg-6">
                        <h1 className="display-5 mb-0">My Projects</h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
             {state2==='All'?<li className="mx-3 active" onClick={fetchProjects} data-filter="*">All Projects</li>:<li className="mx-3" onClick={fetchProjects} data-filter="*">All Projects</li>}
             {state2==='MERN'?<li className="mx-3 active" onClick={()=>fetch_Specific_Projects('MERN')} data-filter=".first">MERN</li>:<li className="mx-3" onClick={()=>fetch_Specific_Projects('MERN')} data-filter=".first">MERN</li>}
             {state2==='Other'?<li className="mx-3 active" onClick={()=>fetch_Specific_Projects('Other')} data-filter=".second">Others</li>:<li className="mx-3" onClick={()=>fetch_Specific_Projects('Other')} data-filter=".second">Others</li>}
                            
                            
                        </ul>
                    </div>
                </div>

                <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">

                        {state.map((ele, ind) => {
                            return (
                    // <div key={ele._id} className="col-lg-4 col-md-6 portfolio-item first">
                    <div key={ele._id} className="col-lg-4 col-md-6 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img style={{"height" : "290px","width":"510px"}}  className="img-fluid" src={ele.img1} alt="" />
                                                                        {/* <img className="img-fluid" src="img/project-1.jpg" alt="" /> */}
                                    <div  className="portfolio-btn">
                                        {/* <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a> */}
                                        
                                        <a  className="btn btn-lg-square btn-outline-secondary border-2 mx-1"  href={ele.img1} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a target="_blank" className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={ele.plink}><i className="fa fa-link"></i></a>
                                    </div>
                    </div>
                                </div>)
                        })}

                    {/* <div className="col-lg-4 col-md-6 portfolio-item second">
                <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-2.jpg" alt="" />
                    <div className="portfolio-btn">
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first">
                <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-3.jpg" alt="" />
                    <div className="portfolio-btn">
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
                <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-4.jpg" alt="" />
                    <div className="portfolio-btn">
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first">
                <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-5.jpg" alt="" />
                    <div className="portfolio-btn">
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
                <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-6.jpg" alt="" />
                    <div className="portfolio-btn">
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                    </div>
                </div>
            </div> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Projects