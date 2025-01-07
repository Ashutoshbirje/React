import Item from "./Components/Item"
import './App.css';
import Itemdate from "./Components/Itemdate";
import Card from "./Components/Card"

function App() {
  const response = [
    {
       itemName:"dkdkdsd",
       itemDate:"21",
       itemMonth:"july",
       itemYear:"2014"
    },
    {
       itemName:"dkdkdsd",
       itemDate:"21",
       itemMonth:"july",
       itemYear:"2014"
    },
    {
       itemName:"dkdkdsd",
       itemDate:"21",
       itemMonth:"july",
       itemYear:"2014"
    }
  ]
  return (
    <div className="App">
      <Card>
      <h1>Hello World</h1>
      // M1
      <Item name="askas">
        hi , how are you ? ( item 1 )
      </Item>
      <Itemdate day="30" month="June1" year="2020"></Itemdate>
      <Item name="sdsg"></Item>
      <Itemdate day="30" month="June2" year="2020"></Itemdate>
      <Item name="ghgg"></Item>
      <Itemdate day="30" month="June3" year="2020"></Itemdate>
      // M2
      <Item name={response[0].itemName}></Item>
      <Itemdate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Itemdate>
      <Item name={response[1].itemName}></Item>
      <Itemdate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></Itemdate>
      <Item name={response[2].itemName}></Item>
      <Itemdate day={response[2].itemDate} month={response[2].itemMonth} year={response[0].itemYear}></Itemdate>
      </Card>
    </div>

  );
}

export default App;
