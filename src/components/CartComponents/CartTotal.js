import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context'
import PropTypes from 'prop-types'
import useModal from '../../useModal'
import CheckOutModal from './CheckOutModal'


function CartTotal({dispatch}) {

    const {cartTotal} = useContext(Context)

    
    const {isShowing, toggle} = useModal()

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button 
                                className='btn btn-outline-danger text-uppercase mb-3 px-5' 
                                type='button'
                                onClick={() => {
                                    dispatch({
                                        type: 'clearCart'
                                    })
                                }}
                            >
                                Очистить корзину
                            </button>
                        </Link>
                        <br/>
                        <button 
                                className='btn btn-checkout text-uppercase mb-3 px-5' 
                                type='button'
                                onClick={toggle}
                            >
                                Оформить заказ
                        </button>
                        <CheckOutModal 
                            isShowing={isShowing}
                            hide={toggle}
                        />
                        <h5>
                            <span className='text-title total-text'>
                                Итого: <strong>{cartTotal.cartTotal}<span className='mr-1 rub'>Р</span></strong>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
CartTotal.propTypes = {
    dispatch: PropTypes.func.isRequired,
    cartTotalFunc: PropTypes.func,
    toggle: PropTypes.func,
    isShowing: PropTypes.bool
}

export default CartTotal