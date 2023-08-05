import React, { useState } from 'react'
import { useActions, useAppSelector } from '../../hooks/useActions'
import ConfirmationModal from '../../components/layout/ConfirmationModal';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.cart);
  const { removeFromCart, clearCart } = useActions();
  const [showConfirmation, setShowConfirmation] = useState(false)
  const navigate = useNavigate()

  const deleteCartItems = (item: any) => {
    removeFromCart({ id: item.id })

  }

  const purchaseHandler = () => {
    setShowConfirmation(true)
  }

  const emptyCartHandler = () => {
    clearCart('')
    navigate("/")
  }

  const closeHandler = () => {
    setShowConfirmation(false);
    clearCart('')
  }

  return (
    <div>
      {cartItems.length <= 0 && <h1 className='text-center font-bold text-2xl'>Cart is Empty!</h1>}
      {cartItems.map((cart: any) => {
        return (
          <div className='border-2 flex justify-between items-center p-4 m-11 '>
            <img src={cart?.image} alt="shoping" />
            <div>
              {/* <h3 className='text-xl'>Name</h3> */}
              <span className='text-orange-500'>{cart?.title}</span>
            </div>
            <div>
              <h3 className='text-xl '>SubTotal</h3>
              <strong>{cart?.price}</strong>
            </div>
            {/* <p>{cartDetail?.description}</p> */}
            <div className='p-1 bg-red-400 rounded-sm'>
              <button className='text-white text-xl' onClick={() => deleteCartItems(cart)}>Delete</button>
            </div>
          </div>
        )
      })}
      <div className=''>
        <button onClick={emptyCartHandler} className='bg-red-700 text-xl text-left text-white ml-11 p-2'>Delet All items</button>
        <button onClick={purchaseHandler} className='bg-green-700 text-xl text-white mx-11 p-2' >Purchase</button>
      </div>

      {showConfirmation && <ConfirmationModal items={cartItems} onClose={closeHandler} />}
    </div>
  )
}

export default CartPage