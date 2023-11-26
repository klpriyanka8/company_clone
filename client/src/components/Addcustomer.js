import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const Addcustomer=()=>{
    const [formData,setFormData] = useState({
        CustomerName:'',
        CustomerNumber:'',
        City:'',
        State:'',
        Pincode:''
    })
    
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post('/createcustomer',formData)
            if(response.data.success)
            {
                alert(response.data.msg)
                setFormData({
                    CustomerName:'',
                    CustomerNumber:'',
                    City:'',
                    State:'',
                    Pincode:''
                })
            }
        }catch(error){
            alert("Error Occurred:"+error)
        }
    }

    return(
        <div>
            <h1>Add Customer</h1>
            <form onSubmit={handleSubmit}>
                <label>Customer Name:
                    <input type="text" name='CustomerName' id='CustomerName' value={formData.CustomerName} onChange={handleChange}
                    required/>
                </label><br/>
                <label>Customer Number:
                    <input type='text' name='CustomerNumber' id='CustomerNumber' value={formData.CustomerNumber}
                    onChange={handleChange}
                    required />
                </label><br/>
                <label>City:
                    <input type='text'
                    name='City' id='City' value={formData.City}
                    onChange={handleChange}
                    required />
                </label><br/>
                <label>State:
                    <input type='text'
                    name='State' id='State' value={formData.State}
                    onChange={handleChange} 
                    required/>
                </label><br/>
                <label>Pincode:
                    <input type='text'
                    name='Pincode' id='Pincode' value={formData.Pincode} onChange={handleChange} 
                    required/>
                </label><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Addcustomer
