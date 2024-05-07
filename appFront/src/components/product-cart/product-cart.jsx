import { ReducerContext } from '../../context/context-provider';
import { useContext } from 'react'

const Cart = () => {
    const { state, dispatch } = useContext(ReducerContext);
    console.log(state.productList)
    return (
      <div className="cart">
        <ul>
          {state.productList.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Cart;