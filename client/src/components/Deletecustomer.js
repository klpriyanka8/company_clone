import React, { useState } from 'react'
import axios from 'axios'

const DeleteCustomer = () =>{

    const [customerNumber,setCustomerNumber] = useState('')

    const handleDelete = async () =>{
        try{
            const response = await axios.delete(`/deletecustomer/${customerNumber}`)
            if(response.data.success){
                alert(response.data.msg)
                setCustomerNumber('')
            }
        }catch(error){
            alert("Error Occurred:"+error)
        }
    }
    return(
        <div>
            <h1>Delete Customer</h1>
            <label>Customer Number:
                <input type='text' value={customerNumber} onChange={(e)=>setCustomerNumber(e.target.value)} />
            </label><br/>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteCustomer
