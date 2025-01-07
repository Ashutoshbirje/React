import React from 'react'

// function Childcomponent(props) {
 
//   console.log("child Component re-rendered again")
 
//   return (
//     <div>
//         <button>
//             {props.buttonname}
//         </button>
//     </div>
//   )
// }

// export default Childcomponent

// const Childcomponent = React.memo (
//     (props) => {
 
//         console.log("child Component re-rendered again")
       
//         return (
//           <div>
//               <button>
//                   {props.buttonname}
//               </button>
//           </div>
//         )
//       }
// );
  
// export default Childcomponent

// this component will re-render when props gets changed ow no 

const Childcomponent = React.memo (
    (props) => {
 
        console.log("child Component re-rendered again")
       
        return (
          <div>
              <button onClick={props.handleClick}>
                  {props.buttonname}
              </button>
          </div>
        )
      }
);
  
export default Childcomponent

// if we pass function in porops then react.memo lose the functionality
