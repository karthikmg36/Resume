
function Card({filename,index,setSelectedResume}){
    const path='./public/images/'+filename+'.png';

    function handelClick(e){
        setSelectedResume(e.currentTarget.getAttribute('data-index'));
    }
  return (
    <div key={index} onClick={handelClick} data-index={index}
    style={{
        width:'25%',
        height:'25%',
        padding:'10px',
        border:'1px solid black',
        boxShadow:'2px 2px 2px black',
        textAlign:'center'
    }}
    >
        <img src={path} alt={`Resume ${index}`}
        style={{
            width:'100%'
        }}
        />
        <h2>Resume {index}</h2>
    </div>
  )
};

export default Card
