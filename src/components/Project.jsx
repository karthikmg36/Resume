import { useState } from "react";
import styles from './userInfo.module.css'
const initialState={
    projectName: '',
      projecttechnology: '',
      projectDesc: ''
}

function Project({projectitem,setUserinfo,userInfo,item}){
    const[project,setProject]=useState(projectitem);

    function handelprojectInput(e){
        switch(e.target.name){
            case 'name':{
                return setProject({...project,projectName:e.target.value})
            }
            case 'technology':{
                return setProject({...project,projecttechnology:e.target.value});
            }
            case 'projectDescription':{
                return setProject({...project,projectDesc:e.target.value})
            }
        }
    }

    function save(e){
        e.preventDefault();
        const newProject = [...userInfo.experience];
        newProject[item]=project;
        setUserinfo( {...userInfo,
            experience:newProject,} )
    }

    function clear(e){
        e.preventDefault();
        setProject(initialState);
    }

    function removeProject(e){
        e.preventDefault();
        console.log(item)
        const filtered=userInfo.experience.filter((i,index)=> item!=index);
        console.log(filtered);
        setUserinfo({...userInfo,experience:filtered})
    }
    
  return (
      <div className={styles.project} >
              <label>Project Name</label>
              <input name='name' value={project.projectName} onChange={handelprojectInput}/>
              <label>Project Technology</label>
              <input name="technology" onChange={handelprojectInput} value={project.projecttechnology}/>
              <br/>
              <div className={styles.description}>
              <label >Project Description</label>
              <textarea cols={40} name="projectDescription" onChange={handelprojectInput} value={project.projectDesc}/>
              </div>
              <button onClick={save}>Save</button>
              <button onClick={removeProject}>Remove Project</button>
              <button onClick={clear}>Clear</button>
              <hr/>
            </div>
  )
};

export default Project
