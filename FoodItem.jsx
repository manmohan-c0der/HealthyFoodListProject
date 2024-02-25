import Item from "./Item";
import {useState} from "react"
const FoodItem = (props) => {
  let { Items } = props;
  // let FoodItems = ["dal", "roti", "vegetable","fruit","salad"];
  // //  let FoodItems=[];

  // if(FoodItems.length===0){
  //   return <h1>The Food List is Empty</h1>
  // }
  // let EmptyItem=FoodItems.length===0 ? <h1>The food item is empty</h1>:null;

  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton=(item,event)=>{
   let newItems=[...activeItems,item]
   setActiveItems(newItems)
  }
  return (
    <ul className="list-group">
      {/* {FoodItems.length===0 ? <h1>The food item is empty</h1>:null} */}
      {/* {EmptyItem} */}

      {Items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuybutton={(event) => onBuyButton(item,event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItem;
