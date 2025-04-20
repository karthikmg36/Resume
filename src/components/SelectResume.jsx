import Card from "./Card";
function SelectResume({setSelectedResume}){
    const resumes =['Resume','Resume1','Resume2'];

  return (
    <div style={{
        display:"flex",
        justifyContent:'space-around'
    }}>
        {resumes.map((filename,index)=><Card filename={filename} index={index} key={index} setSelectedResume={setSelectedResume}/>)}
    </div>
  )
};

export default SelectResume
