import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DisplayCustomer = () =>{

    const [customerInfo,setCustomerInfo] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get('/displaycustomer')
                setCustomerInfo(response.data.data)
            }catch(error)
            {
                alert("Error in Displaying Customers"+error)
            }
        }
        fetchData()
    },[])
    return(
        <div>
            <h1>Display Customer</h1>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Number</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerInfo.map((customer)=>(
                        <tr key={customer._id}>
                            <td>{customer.CustomerName}</td>
                            <td>{customer.CustomerNumber}</td>
                            <td>{customer.City}</td>
                            <td>{customer.State}</td>
                            <td>{customer.Pincode}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default DisplayCustomer
