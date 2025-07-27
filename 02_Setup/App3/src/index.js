import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// const MyApp = () => {
//   return (
//      <h1>Hello Ashutosh</h1>
//   );
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const MyApp = (
//     <a href="https://google.com" target='_blank'>Click</a>
// )

const MyApp = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:'_blank'
  },
  'click Me'
)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <MyApp/> */}
  //   {/* <reactElement/> invalid syntax */}
  // </React.StrictMode>
  MyApp
);

