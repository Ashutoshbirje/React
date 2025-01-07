import "./Itemdate.css"

function Itemdate(props){
    return (
       <div className="mfg-date">
        <span>
        {props.day}
        </span>
        <span>
        {props.month}
        </span>
        <span>
        {props.year}
        </span>
       </div>
    )

    // const day = props.day ;
    // const month = props.month ;
    // const year = props.year;    
    // return (
    //     <div className="mfg-date">
    //      <span>
    //      {day }
    //      </span>
    //      <span>
    //      {month}
    //      </span>
    //      <span>
    //      {year}
    //      </span>
    //     </div>
    //  )

}
   
export default Itemdate;