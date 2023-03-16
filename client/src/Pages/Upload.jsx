import React, { useState } from 'react'
import { useEffect } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable, uploadString } from "firebase/storage";
import { storage } from '../Firebase/Firebase'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Upload = () => {
    let [state1, updateState1] = useState(undefined);
    let [state4, updateState4] = useState(undefined);
    let [state2, updateState2] = useState();
    let [state3, updateState3] = useState(false);
    let [state5, updateState5] = useState(false);
    let [state6, updateState6] = useState();
    let [state7, updateState7] = useState(0);
    let [state8, updateState8] = useState(0);
    let [state9, updateState9] = useState(0);
    let [state10, updateState10] = useState(0);
    let [state11, updateState11] = useState(0);
    let [percentage, setPercentage] = useState(0);
    let [percentage2, setPercentage2] = useState(0);

    let Navigate = useNavigate();
    let inputEvent = (e) => {
        updateState2({ ...state2, [e.target.name]: e.target.value })
        console.log(state2);
    }
    let inputEvent2 = (e) => {
        updateState9({ ...state9, [e.target.name]: e.target.value })
        console.log(state9);
    }
    let inputEvent3 = (e) => {
        updateState10({ ...state10, [e.target.name]: e.target.value })
        console.log('state10',state10);
    }
    let inputEvent4 = (e) => {
        updateState11({ ...state11, [e.target.name]: e.target.value })
        console.log(state11);
    }
    let inputEventImg2 = (e) => {
        updateState1( e.target.files[0])
        updateState5(true);
    }
    let inputEventImg3 = (e) => {
        // updateState4({ ...state4, [e.target.name]: e.target.files[0] })
        updateState4( e.target.files[0])
        updateState3(true);
    }
    let SignOutBtn=async(e)=>{
        e.preventDefault()
        console.log('running val');
        let val=await axios.get('/signout');
        console.log('signout val',val);
        if (val.status===200) {
            Navigate('/');
        }
        // try {
        // } catch (error) {
        //     alert('Error!')
        // }
    }
    let SaveEducation = async (e) => {
        e.preventDefault();
        let val = await fetch('/education', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ ...state2 })
            // body: JSON.stringify({state2})
        })
        console.log(state2);
        console.log(val);
        if(val.status!=200)
        {
            alert("you are not authenticated user")
            Navigate('/login')
        }

    }
    let SaveExperience = async (e) => {
        e.preventDefault();
        let val = await fetch('/experience', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ ...state9 })
            // body: JSON.stringify(state2)
        })
        console.log(val);
        if(val.status===200)
        {
            alert("Added!!!")
        }
        if(val.status!=200)
        {
            alert("you are not authenticated user")
            Navigate('/login')
        }
    }
    let SaveService = async (e) => {
        e.preventDefault();
        let val = await fetch('/services', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ ...state10 })
            // body: JSON.stringify(state2)
        })
        console.log(val);
        if(val.status===200)
        {
            alert("Added!!!")
        }
        if(val.status!=200)
        {
            alert("you are not authenticated user")
            Navigate('/login')
        }
    }
    let SaveProject = async (e) => {
        e.preventDefault();
        let val = await fetch('/projects', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ ...state10 })
            // body: JSON.stringify({ ...state11 })
            // body: JSON.stringify(state2)
        })
        
        console.log(val);
        if(val.status===200)
        {
            alert("Added!!!")
        }
        if(val.status!=200)
        {
            alert("you are not authenticated user")
            Navigate('/login')
        }
    }
    let uploading = async(file,urlType) => {
        // console.log('file,name',file.img1.name);
        // console.log('file.name',file.name);
        // + 'file.name'
        // const metadata = {
        //     contentType: 'image/jpeg'
        //   };
        // let name = new Date().getTime()+'fawad';
        // let name = new Date().getTime()+file.img1.name;
        let name = new Date().getTime()+file.name;
        console.log('name',name);
        console.log('storage',storage);
        const storageRef = ref(storage, name );
        console.log('name2',name);
        // ,metadata
        const uploadTask = uploadBytesResumable(storageRef, file);        
        // const uploadTask = uploadBytesResumable(storageRef, file.img1);        
        // const uploadTask = uploadBytesResumable(storageRef, name);        
        console.log('name3',name);
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            urlType==="img2"?setPercentage(progress):setPercentage2(progress)
            console.log('Upload is ' + progress + '% done');
            // state3?setPercentage2(progress):setPercentage(progress)
            // state3?setPercentage2(progress):state5?setPercentage(progress):
            // state1?updateState7(progress):updateState8(progress)
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            switch (error.code) {
              case 'storage/unauthorized':
                break;
              case 'storage/canceled':
                break;
              case 'storage/unknown':
                break;
            }
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              updateState10((prev)=>{
                console.log('prev',prev);
                console.log('urlType',urlType);
                return {...prev,[urlType]:downloadURL}
            })
            //   updateState2((prev)=>{
            //     return {...prev,[urlType]:downloadURL}
            // })
        
            });
          }
        );
        }
        
        let fetchUser=async()=>{
          let id=JSON.parse(localStorage.getItem("user_admin"));
          console.log('i am an id',id);
          try {
            if(id!==null)
            {
                // console.log('id',id);
                console.log('i am not null',id);
                let val=await axios.get(`/user/user/${id}`);
                // /user/user/:email
                console.log('val',val);
                if (!val.status===200) {
                //   updateState1(val.data);
                  alert("PLease login first to further proceed")
                  Navigate('/login');
                console.log(val.status);
                }
               
            }
            else
            {
                console.log('i am null',id);
                // updateState1(val.data);
                  alert("PLease login first to further proceed...")
                  Navigate('/login');
            }
            // else
            // {
            // }
          } catch (error) { 
            // alert(error)
            // Navigate('/login');
          }
        }  
        useEffect(()=>{
          fetchUser();
        },[])
            useEffect(()=>{
                state5 && uploading(state1,"img2");
                console.log("state1",state1);
            },[state1])
            useEffect(()=>{
                state3 && uploading(state4,"img1");
            },[state4])
        
    return (
        <>
            <div className='upload0'>
                <div className="upload">
        <button onClick={SignOutBtn} id="SignOut">SignOut</button>
                    <form className='uploadForm' action="" method="post">
                        <div className="FormDisplayMain FormDisplay1">
                            <div className='education'>
                            <h6>Add education updates</h6>
                            {/* <button onClick={SignOutBtn} id="SignOut">SignOut</button> */}
                            </div>
                            <input type="text" onChange={inputEvent} name="name" placeholder='name' id="" />
                            <input type="text" onChange={inputEvent} name="date" placeholder='completion date' id="" />
                            <input type="text" onChange={inputEvent} name="platform" placeholder='platform' id="" />
                            <input className='input' type="submit" value="Upload" onClick={SaveEducation} id='UploadBtn' />
                            {/* <input className='input' type="submit" value="Upload" onClick={SubmitBtn} id='UploadBtn' /> */}
                        </div>
                    </form>
                    <form className='uploadForm' action="" method="post">
                        <div className="FormDisplayMain FormDisplay2">
                            <h6>Add experience updates</h6>
                            <input type="text" onChange={inputEvent2} name="name" placeholder='name' id="" />
                            <input type="text" onChange={inputEvent2} name="date" placeholder='completion date' id="" />
                            <input type="text" onChange={inputEvent2} name="platform" placeholder='platform' id="" />
                            <input className='input' type="submit" value="Upload" onClick={SaveExperience} id='UploadBtn' />
                        </div>
                    </form>
                    <form className='uploadForm' action="" method="post">
                        <div className="FormDisplayMain FormDisplay3">
                            <h6>Add new Services</h6>
                            <input type="text" onChange={inputEvent3} name="name" placeholder='name' id="" />
                            <label htmlFor="image1">Image:</label>
                            <input type="file" name="img2" id="image1" accept="image/*" onChange={inputEventImg2} />
                            {/* {setPercentage}% done */}
                            <input type="text" onChange={inputEvent3} name="price" placeholder='price' id="" />
                            <input type="text" onChange={inputEvent3} name="details" placeholder='detail' id="" />
                            
                            {percentage===100?<input className='input' type="submit" value="Upload" onClick={SaveService} id='UploadBtn' />:'waiting for picture to upload'}
                            <br />
                            { Math.round(percentage)}% done
                        </div>
                    </form>
                    <form className='uploadForm' action="" method="post">
                        <div className="FormDisplayMain FormDisplay4">
                            <h6>Add new Project</h6>
                            {/* <input type="text" onChange={inputEvent4} name="name" placeholder='name' id="" /> */}
                            <input type="text" onChange={inputEvent3} name="pname" placeholder='name' id="" />
                            <label htmlFor="image2">Image:</label>
                            <input type="file" name="img1" id="image2" accept="image/*" onChange={inputEventImg3} />
                            <input type="text" onChange={inputEvent3} name="plink" placeholder='link' id="" />
                            <input type="text" onChange={inputEvent3} name="ptag" placeholder='tag' id="" />
                            {/* <input type="text" onChange={inputEvent4} name="link" placeholder='link' id="" />
                            <input type="text" onChange={inputEvent4} name="tag" placeholder='tag' id="" /> */}
                     {percentage2===100?<input className='input' type="submit" value="Upload" onClick={SaveProject} id='UploadBtn' />:'waiting for picture to upload '}  
                     <br />
                     {Math.round(percentage2)}% done
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Upload