import React from 'react'
import './resentorders.css'
function Resentorders() {

    const tabledata = [
        {
            customername: "Wade Warren",
            profilepic: require('../../Assets/orderprofilpic1.png'),
            orderno: "12345678",
            Amount: "124.00",
            status: 1
        },
        {
            customername: "Jone cooper",
            profilepic: require('../../Assets/orderprofilpic2.png'),
            orderno: "45615762",
            Amount: "65.02",
            status: 2
        }, {
            customername: "cody fisher",
            profilepic: require('../../Assets/orderprofilpic2.jpg'),
            orderno: "45168527",
            Amount: "45.88",
            status: 3
        }, {
            customername: "Guy Hawkins",
            profilepic: require('../../Assets/orderprofilpic4.png'),
            orderno: "84545456",
            Amount: "545.00",
            status: 1
        }, {
            customername: "kristin waston",
            profilepic: require('../../Assets/orderprofilpic1.png'),
            orderno: "65859487",
            Amount: "355.40",
            status: 1
        },{
            customername: "Savannah Nguyan",
            profilepic: require('../../Assets/orderprofilpic2.png'),
            orderno: "45879567",
            Amount: "128.20",
            status: 1
        }
    ]

    return (
        <div className='recentordersmain'>
            <h4 className='p-1'>Resent Orders</h4>
            <table className="table p-4 custom-table">
                <thead>
                    <tr>
                        <th scope="col">Customer</th>
                        <th scope="col">Order No.</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tabledata && tabledata.map((order, i) => {
                        return (
                            <tr key={i}>
                                <td style={{ display: "flex", alignItems: "center" }}><img src={order.profilepic} className='orderpic' alt="" width="40px" /><div>{order.customername}</div></td>
                                <td>{order.orderno}</td>
                                <td>&#36;{order.Amount}</td>
                                <td ><span className={`${order.status == 1 ? 'deliveredord' : 'cancelled'}`}>{order.status == 1 ? 'Delivered' : order.status == 2 ? 'Pending' : 'Cancelled'}</span></td>
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
        </div>
    )
}

export default Resentorders