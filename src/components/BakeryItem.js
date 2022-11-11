// TODO: create a component that displays a single bakery item


function BakeryItem(props){
    return(
      <div clas="items">
        <h4>Name: {props.item.name} </h4>
        <img src ={props.item.image}></img>
        <p>Description: {props.item.description}</p>
        <p>Price: {props.item.price}</p>
        <button onClick={()=>{props.updateCart(props.index); props.setPrice(props.price+props.item.price)}}>Add to Cart</button>
      </div>
    )
  }

  export default BakeryItem;
