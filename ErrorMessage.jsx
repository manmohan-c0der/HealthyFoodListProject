function ErrorMessage({Items}){
  // let FoodItems = ["dal", "roti", "vegetable","fruit","salad"];
  //  let FoodItems=[];
 return  <>{Items.length===0 && <h1>The food item is empty</h1>}</>
}
export default ErrorMessage;