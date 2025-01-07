import "./Item.css"
function Item(props){
 const ItemName=props.name;
 return (
   <div>
    <p className="para">{ItemName}</p>
    {props.children}
   </div>
 )
}
export default Item;
// props.chidren --> To show content of costom HTML tag on web page