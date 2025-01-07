import "./Card.css"
function Card(props){
 return (
   <div className="card">
    {props.children}
   </div>
 )
}
export default Card;
// props.chidren --> To show content of costom HTML tag on web page