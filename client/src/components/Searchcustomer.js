import React, { useState } from 'react'
import axios from 'axios'

const SearchCustomer = () =>{

    const [customerNumber,setCustomerNumber] = useState('')
    const [customerInfo,setCustomerInfo] = useState('')
    const [error,setError] = useState('')

    const handleSearch = async ()=>{
        try{
            const response = await axios.get(`/searchcustomer/${customerNumber}`)
            const customer = response.data.data
            const customerData = `${customer.CustomerName} \n${customer.CustomerNumber}\n${customer.City}\n${customer.State}\n${customer.Pincode}`
            setCustomerInfo(customerData)
            setError('')
        }catch(error){
            setCustomerInfo('')
            setError("Customer Not Found")
        }
    }

    return(
        <div>
            <h1>Search Customer</h1>
            <label>Customer Number:
                <input type='text' value={customerNumber} onChange={(e) => setCustomerNumber(e.target.value)} />
            </label><br />
            <textarea value={error || customerInfo} readOnly /><br/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )

}

export default SearchCustomer
