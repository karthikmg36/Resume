import {useState} from "react"
// import Accordian from "./Accordian";
import styles from './UserInfo.module.css'
import Project from "./Project";

const initialProject={
  projectName: '',
  projecttechnology: '',
  projectDesc: ''
};

function UserInfo({userInfo,setUserinfo}) {


  function handelInput(e) {
    switch (e.target.name) {
      case 'firstname':
        {
          return setUserinfo({
            ...userInfo,
            name: {
              ...userInfo.name,
              firstname: e.target.value.trim()
            }
          })
        }
      case 'lastname':
        {
          return setUserinfo({
            ...userInfo,
            name: {
              ...userInfo.name,
              lastname: e.target.value.trim()
            }
          })
        }
      case 'mobile':
        {
          return setUserinfo({
            ...userInfo,
            mobile: e.target.value.trim()
          });
        }
      case 'email':
        {
          return setUserinfo({
            ...userInfo,
            email: e.target.value.trim()
          });
        }
      case 'skills':
        {   const index=e.target.getAttribute('item');
            let updateSkills=[...userInfo.skills];
            updateSkills[index]=e.target.value.trim();
            return setUserinfo({
                ...userInfo,
                skills:updateSkills
            })
        }
        case 'summary':{
            return setUserinfo({
                ...userInfo,
                summary:e.target.value.trim()
            })
        }
        // case 'project':{
        //   const 
        //   return setUserinfo({
        //     ...userInfo,

        //   })
        // }

    }
  }

  function handelAdd(e){
    const{name}=e.target;
    e.preventDefault();
    switch(name){
        case 'skill':{
            return setUserinfo({...userInfo,skills:[...userInfo.skills,' ']})
        }
        case 'project':{
          return setUserinfo({...userInfo,experience:[...userInfo.experience,initialProject]})
        }
    }

  }

  return (
    <div>
      <h1>Please provide the below information</h1>
      <form className={styles.form}>
        <div className={styles.inputDiv}>
          <label>First Name</label>
          <input
            type="text"
            onChange={handelInput}
            name="firstname"
            value={userInfo.name.firstname}/>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={userInfo.name.lastname}
            onChange={handelInput}/>
        </div>
        <div className={styles.inputDiv}>
          <label htmlFor="">Mobile</label>
          <input name="mobile" value={userInfo.mobile} onChange={handelInput}/>
          <label>Email</label>
          <input type="email" value={userInfo.email} onChange={handelInput} name="email"/>
        </div>
        <div className={styles.inputDiv}>
          <label>Summary</label>
          <textarea
            cols={40}
            style={{
            width: '70%'
          }}
            name="summary"
            onChange={handelInput}
            value={userInfo.summary}/>
        </div>
        <div className={styles.inputDiv}>
          <label>Skills</label>
          {userInfo
            .skills
            .map((i, index) => (<input name="skills" onChange={handelInput} key={index} item={index} value={userInfo.skills[index]}/>))}
          <button onClick={handelAdd} name="skill">
            +
          </button>
        </div>
        <div>
            <h4>Project</h4>
            <hr/>
            {userInfo.experience.map((item,index)=>(
              <Project projectitem={item} key={index} item={index} setUserinfo={setUserinfo} userInfo={userInfo}/>
            ))}
            <button onClick={handelAdd} name="project">Add New Project</button>
        </div>
      </form>
    </div>
  )
};

export default UserInfo
