import React, {useEffect, useState} from 'react'

const ProductCard = (props) => {

const [cart, setCart] = useState([])    

const { name, productList, id,  } = props 

const changeStae = () => {
    setCart(productList)
}

useEffect(()=>{
    changeStae()
})

var btnStyle={
    backgroundColor: "blue",
    color:"white",
    border: "none",
    fontSize:"18px",
    padding:"5px 20px",
    cursor: "pointer"
}

const AddItem = (j) => {
    
    setCart(prevState =>
        prevState.map((item, o) => {
          if (j === o) {
            return {
              ...item,
              inCart: true,
              count: item.counterVal
            };
          }
          console.log(item);
        })
      );
     
}

const removeCart = j => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (j === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false
          };
        }
        console.log(item);
      })
    );
  };
  return (
    <>
      <div>
      <h2 style={{textAlign:"start"}}>{name}</h2>
      <div style={{display:"flex"}}>
       {
        productList.map((i, j) => {
            return (
                <div key={j}>
                    <div style={{border:"1px solid blue", width: "200px", height: "200px", marginLeft:"50px"}}>
                         <h5>Name: {i.name}</h5>
                         <h5>Price: {i.price}</h5>
                         <button style={btnStyle}
                         onClick={()=>AddItem(j)}>
                            Add to the cart
                         </button>
                         <br/>
                         <br/>
                         <button style={btnStyle}
                         onClick={() => removeCart(j)}
                         >Remove from cart</button>
                    </div>
                </div>
            )
        })
       }
      </div>
      </div>
    </>
  )
}

export default ProductCard