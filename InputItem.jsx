import style from './InputItem.module.css'
const InputItem=({handleOnKeyDown})=>{
  // const handleonChange=(event)=>{
  //   console.log(event.target.value)
  // }
  return <input onKeyDown={handleOnKeyDown} className={style.Input}  placeholder="Enter Your Food Item here" type="text" />

}

export default InputItem;