import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItem from "./Component/FoodItem";
import Heading from "./Component/heading";
import ErrorMessage from "./Component/ErrorMessage";
import Container from "./Component/Container";
import InputItem from "./Component/InputItem";
import { useState } from "react";

function App() {
  //  let FoodItems = ["dal", "roti", "vegetable","fruit","salad","Chocolate"];
  // let FoodItems=[];
  let [FoodItems, setFoodItems] = useState([]);
  // let [showText, setTextState] = useState();
  // let showText=textStateArr[0];
  // let setTextState=textStateArr[1];
  // console.log(`current value of textState ${showText}`)

  const onkeyDown = (event) => {
    // console.log(event);
     if(event.key==="Enter"){
      let newFoodItem=event.target.value;
      event.target.value=""

      let newItems=[...FoodItems,newFoodItem]
      setFoodItems(newItems)
      // console.log(`Food value entered is ${newFoodItem}`)
     }
  };

  return (
    // <React.Fragment></React.Fragment>
    <>
      <Container>
        <Heading></Heading>
        <InputItem handleOnKeyDown={onkeyDown}></InputItem>
        <ErrorMessage Items={FoodItems}></ErrorMessage>
        {/* <p>{showText}</p> */}
        <FoodItem Items={FoodItems}></FoodItem>
      </Container>
      {/* <Container>
      <p>Above List is list of Healthy food which help our growth</p>
     </Container> */}
    </>
  );
}

export default App;
