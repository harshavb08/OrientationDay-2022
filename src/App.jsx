import { useEffect, useState } from "react";
import logo from "./logo.png";
import "./App.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";

import { db } from "./firebase-config";
import { ref,get, set } from "firebase/database";
import results from "./results";
import instance from "./instance";
// Initialize Firebase

function App() {
  const [register, setRegister] = useState(false);
  const [department, setDepartment] = useState("");
  const [quota, setQuota] = useState("");
  const [rank, setRank] = useState("");
  const [rtStudConv, setrtStudConv] = useState(false);
  const [rtStudMgmt, setrtStudMgmt] = useState(false);
  const [student, setStudent] = useState({Name:"",branch:"",htno:""});
  const [name, setName] = useState("");

  const [mobile, setMobile] = useState("");
  const [parent, setParent] = useState("");
  const [count, setCount] = useState(0);


    
 const [dis1,setDis1]=useState(true);
 const [dis2,setDis2]=useState(true);
 const [dis3,setDis3]=useState(true);
 const [dis4,setDis4]=useState(true);

  const[gotData,setGotData]=useState(false);

  const setStudentMobile = (value) => {
      setMobile(value);
  };
  const setParentMobile = (value) => {
      if (value === mobile) {
        alert("Parent's mobile number cannot be same as student's mobile number");
      } else {
        setParent(value)
      }
  };
  const display = (value) => {
    var n = parseInt(value);
    //console.log(n);
    if (isNaN(n)) {
      alert("Please enter a proper number");
      setCount(0);
    } else if (n >= 0 && n <= 8) {
      setCount(n);
    } else {
      alert("We cannot have more than 8 guests per student.");
      setCount(0);
    }
  };
  const options = [
    "Computer Science & Engineering (CSE)",
    "Electrical & Electronics Engineering (EEE)",
    "Electronics & Communication Engineering (ECE)",
    "Mechanical Engineering (MEC)",
    "Civil Engineering (CIV)",
    "Information Technology (INF)",
    "Computer Science & Engineering-Cyber Security (CSC)",
    "Computer Science & Engineering-Data Science (CSD)",
    "Computer Science & Engineering- AI & ML (CSM)",
    "Artificial Intelligence & Machine Learning (AIM)",
  ];
  const quotaOptions = ["Convener Quota", "Management Quota"];
  var sdp="";
  const _handleDepartment = (e) => {
    setDepartment(e.value);
    const d=e.value;
    if(d==="Computer Science & Engineering (CSE)"){
      sdp="CSE";
    }
    else if(d==="Electrical & Electronics Engineering (EEE)"){
      sdp="EEE";
    }
    else if(d==="Electronics & Communication Engineering (ECE)"){
      sdp="ECE";
    }
    else if(d==="Mechanical Engineering (MEC)"){
      sdp="MEC";
    }
    else if(d==="Civil Engineering (CIV)"){
      sdp="CIV";
    }
    else if(d==="Information Technology (INF)"){
      sdp="INF";
      //console.log(sdp);
    }
    else if(d==="Computer Science & Engineering-Cyber Security (CSC)"){
      sdp="CSC";
    }
    else if(d==="Computer Science & Engineering-Data Science (CSD)"){
      sdp = "CSD";
    }
    else if(d==="Computer Science & Engineering- AI & ML (CSM)"){
      sdp="CSM";
    }
    else if(d==="Artificial Intelligence & Machine Learning (AIM)"){
      sdp="AIM";
    }
   // console.log(sdp);
  };
  const _handleRegister = (e) => {
    setRegister(true);
  };
  
  
  const [temp,setTemp]=useState([]);

  const _handleQuota = (e) => {
    setQuota(e.value);
    if(e.value==="Management Quota"){
      if(department==="Computer Science & Engineering (CSE)"){
        instance.get('/CSE.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }else if(department==="Electrical & Electronics Engineering (EEE)"){
        instance.get('/EEE.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }
      else if(department==="Electronics & Communication Engineering (ECE)"){
        instance.get('/ECE.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }
      else if(department==="Mechanical Engineering (MEC)"){
        instance.get('/MEC.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }
      else if(department==="Civil Engineering (CIV)"){
        instance.get('/CIV.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }
      else if(department==="Information Technology (INF)"){
        instance.get('/INF.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }
      else if(department==="Computer Science & Engineering-Cyber Security (CSC)"){
        instance.get('/CSC.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }
      else if(department==="Computer Science & Engineering-Data Science (CSD)"){
        instance.get('/CSD.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }
      else if(department==="Computer Science & Engineering- AI & ML (CSM)"){
        instance.get('/CSM.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }
      else if(department==="Artificial Intelligence & Machine Learning (AIM)"){
        instance.get('/AIM.json').then((response)=>{
          // console.log(response.data);
           const fetchedData=[];
           for(let key in response.data){
             fetchedData.push({
               ...response.data[key],
               id:key
             });
           }
           console.log(fetchedData);
           setTemp(fetchedData);
         }).catch((error)=>{
           console.log(error);
         })
      }

    }
  };
  const _handleRank = (e) => {
    setRank(e.target.value);
  };
  const _handleName = (e) => {
    setStudent({...student,Name:e.target.value,branch:department,htno:"NA"});

    setGotData(true);
    setrtStudMgmt(true);
    
  };
  const _handleConvener = async (e) => {
    e.preventDefault();
    const dbRef = ref(db,rank);
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        setStudent(snapshot.val());
        setrtStudConv(true);
        setGotData(true);
        //console.log(snapshot.val());
        
      } else {
        alert("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const _handleManagement =  (e) => {
    e.preventDefault();
    selectedStud=e;
    setName(e.target.value);
    setStudent({...student,Name:e.target.value});
    console.log(e);
    setrtStudMgmt(true);
  };

  const list=[{"Name":student.Name,"Department":student.branch,"Quota":quota,"Rank":rank,"Mobile number":mobile,"Parent mobile number":parent,"Count":count}];

  const _handleDetails = (e) => {
    e.preventDefault();
    results.post("/attendance.json",list).then((response) => {
      console.log(response);
      alert("Data submitted successfully");
    });
  }

  const _handleFN = (e) => {
    fetch('assets/Forenoon Session Schedule.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'assets/Forenoon Session Schedule.pdf';
          alink.click();
      })
  })
 }
  const _handleAN = (e) => {
    setDis1(false);
    fetch("assets/Afternoon Session Schedule.pdf").then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = "assets/Afternoon Session Schedule.pdf";
          alink.click();
      })
  })
}

 const _handleContact = (e) => {
  setDis2(false);
  fetch("assets/Contact Details.pdf").then(response => {
    response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "assets/Contact Details.pdf";
        alink.click();
    })
  })
}

 const _handleRules = (e) => {
  setDis3(false);
  fetch("assets/Rules and Regulation.pdf").then(response => {
    response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "assets/Rules and Regulation.pdf";
        alink.click();
    })
})
}
 const _handleBrochure = (e) => {
  setDis4(false);
  fetch("assets/College Brochure.pdf").then(response => {
    response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "assets/College Brochure.pdf";
        alink.click();
    })
})
}
 //console.log(student);

  return (
    <div className="main" style={{ padding: "10px" }}>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <div className="header" style={{ textAlign: "center" }}>
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{ maxWidth: "700px", width: "100%" }}
          />
          <h2>
            Welcome to the Orientation Day
            <br /> for the batch of 2022-26
          </h2>
          <div>
            <a
              className="social-button"
              type="submit"
              href="https://cmrcet.ac.in"
              target="_blank"
            >
              <i className="fa fa-info-circle"></i>
            </a>
            <a
              className="social-button"
              type="submit"
              href="https://www.instagram.com/cmrcet_official/"
              target="_blank"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
            <a
              className="social-button"
              type="submit"
              href="https://m.facebook.com/cmrcetofficial/"
              target="_blank"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              className="social-button"
              type="submit"
              href="https://www.linkedin.com/school/cmr-college-of-engineering-technology/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-button"
              href="https://www.youtube.com/channel/UCfORAqkwPeXIYcllELHecmw"
              type="submit"
              target="_blank"
            >
              <i className="fab fa-youtube-square"></i>
            </a>
            <a
              className="social-button"
              type="submit"
              href="https://twitter.com/cmrcet_official"
              target="_blank"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
          <div className="page_form">
            <label>
              <h3>Choose your Department</h3>
            </label>
            <Dropdown
              options={options}
              onChange={_handleDepartment}
              placeholder="Select an option"
            />
            {department === "Computer Science & Engineering (CSE)" ? (
              <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleFN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 & dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department === "Electrical & Electronics Engineering (EEE)" ? (
              <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleAN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 & dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department ===
              "Electronics & Communication Engineering (ECE)" ? (
                <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleAN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 && dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department === "Mechanical Engineering (MEC)" ? (
              <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleAN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 && dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department === "Civil Engineering (CIV)" ? (
              <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleAN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 && dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department ==="Computer Science & Engineering-Cyber Security (CSC)" ? (
                <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleFN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 && dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department ===
              "Computer Science & Engineering-Data Science (CSD)" ? (
                <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleAN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 && dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department ===
              "Computer Science & Engineering- AI & ML (CSM)" ? (
                <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleFN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 && dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) : department ===
              "Artificial Intelligence & Machine Learning (AIM)" ? (
                <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleAN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 && dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ) :department === "Information Technology (INF)" ? (
              <div>
                <h3>Please download the files below to continue</h3>
                <a onClick={_handleFN} >Schedule of Orientation Day.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleContact}>Contact Details 2022-2023.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <a onClick={_handleRules}>Rules and Regulations.pdf{' '}<i className="fab fa fa-download"/></a>
                <br /><br/>
                <a onClick={_handleBrochure}>College Brochure.pdf{' '}<i className="fab fa fa-download"/></a>
                <br/><br/>
                <button
                  disabled={dis1 && dis2 && dis3 && dis4}
                  type="button"
                  className="btn btn-primary"
                  onClick={_handleRegister}
                >
                  Register
                </button>
              </div>
            ): (
              <br />
            )}
            {register === true ? (
              <div>
                <h3>Please Enter Below Form To Complete Registration</h3>
                <br />
                <Dropdown
                  options={quotaOptions}
                  onChange={_handleQuota}
                  placeholder="Select an option"
                />
                <br />
                {quota === "Convener Quota" ? (
                  <div>
                    <h3>Convener Quota</h3>
                    <label>Please Enter Your Rank: </label>
                    <br />
                    <input type="number" onChange={_handleRank} />
                    <br />
                    <br />
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={_handleConvener}
                    >
                      Get Details
                    </button>
                  </div>
                ) : quota === "Management Quota" ? (
                  <div>
                    <h3>Management Quota</h3>
                    <label>Please Choose Your Name: </label>
                    <br /><br/>
                    <br/>
                    {
                      temp.map((item, index) => {
                        return (
                          <div>
                            <input
                              type="radio"
                              name="mgmt"
                              value={item.name}
                              idx={item.index}
                              onChange={_handleName}
                            />
                            {item.name}
                            <br /><br />
                          </div>
                        );
                      })
                    }
                    <br />
                  </div>
                ) : (
                  <br />
                )}
              </div>
            ) : (
              <br />
            )}
          </div>
          {/* // end of page_form */}
          {/* conv quota students display*/}
          {
            rtStudConv===true && (
              <div>
                <h3>Student Details</h3>
                <br />
                <label>Name: </label>
                <p>{student.Name}</p>
                <br />
                <label>Hall Ticket No: </label>
                <p>{student.htno}</p>
                <br />
                <label>Department: </label>
                <p>{student.branch}</p>
              </div>
            )
          }
          {/* end of conv quota students display*/}
          {/* management quota students display*/}
          {
            rtStudMgmt===true && (
              <div>
                <h3>Student Details</h3>
                <br />
                <label>Name: </label>
                <p>{student.Name}</p>
                <br />
                <label>Department: </label>
                <p>{student.branch}</p>
                <br/>
              </div>
            )}
          {/* end of management quota students display*/}
          {/* // details */}
          {  gotData===true && (
          <div>
            <h3>Please Fill The Details Below</h3>
            <br />
            <label>Enter Your Mobile Number: </label>
            <br />
            <br/>
            <input
                      type="text"
                      placeholder="10 digit mobile number"
                      onChange={(e) => setStudentMobile(e.target.value)}
                    />
            <br />
            <br/>
            <label>Enter Your Parent Mobile Number:</label>
            <br></br>
            <br/>
            <input
                      type="text"
                      placeholder="10 digit mobile number"
                      onChange={(e) => setParentMobile(e.target.value)}
                    />
            <br />
            <br/>
            <label>Number of people attending the Orientation (including you)</label>
            <br />
            <br/>
            <input
                      type="text"
                      placeholder="Enter the count"
                      onChange={(e) => display(e.target.value)}
            />
            <br />
            <br/>
            <button type="button" class="btn btn-primary" onClick={_handleDetails}>
              Submit
            </button>
          </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
