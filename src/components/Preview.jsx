import { useRef } from "react"
import Resume1 from "../Pages/Resume1"
import { useReactToPrint } from "react-to-print"

function Preview({userInfo}){
    const contentRef = useRef();
    const printFunction = useReactToPrint({contentRef});
  return (
    <>
    <div ref={contentRef}style={{
        border:'1px solid black'
    }}>
      <Resume1 userInfo={userInfo}/>
    </div>
    <button onClick={printFunction}>Print</button>
    </>
  )
};

export default Preview
