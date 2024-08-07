import React from 'react'
import './orders.css'
import Basket from '../../Assets/basket2.png'
import deliver from '../../Assets/shopping-bag.png'
import cancelorders from '../../Assets/cancelorders.png'
import revenue from '../../Assets/revenue.png'

function Orderssection() {
  return (
    <div className='orderscontainer'>
        <div className="ordersection">
            <section className="basket"><img src={Basket} alt="" width="50px" /></section>
            <section className="ordername">Total Orders</section>
            <section className="delivered"><span>75</span> <span className='increase1'>&#9650;3%</span></section>
        </div>
        <div className="ordersection">
            <section className="delivery"><img src={deliver} alt="" width="50px" /></section>
            <section className="ordername">Total Delivered</section>
            <section className="delivered"><span>70</span> <span className='increase2'>&#9660;3%</span></section>
        </div>
        <div className="ordersection">
            <section className="image"><img src={cancelorders} alt="" width="50px" /></section>
            <section className="ordername">Total Cancelled</section>
            <section className="delivered"><span>05</span> <span className='increase1'>&#9650;3%</span></section>
        </div>
        <div className="ordersection">
            <section className="image"><img src={revenue} alt="" width="50px" /></section>
            <section className="ordername">Total Revenue</section>
            <section className="delivered"><span>&#36;12K</span> <span className='increase2'>&#9660;3%</span></section>
        </div>
    </div>
  )
}

export default Orderssection