import style from './Item.module.css'
function Item({foodItem,bought,handleBuybutton}){
  // const BuyButtonClick=(event)=>{
  //   console.log(event)
  //   console.log(`${props.foodItem} being bought`)
  // }
 return  <li  className={`${style.itemColor} list-group-item ${bought && "active"}`}>
  <span>{foodItem}   <button className={`${style.button} btn btn-info`} onClick={handleBuybutton} type="button">Buy</button></span>

</li>
}
export default Item;