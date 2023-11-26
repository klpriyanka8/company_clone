import React,{useState} from 'react'
import axios from 'axios'

const UpdateCustomer = () =>{
    const [customerNumber, setCustomerNumber] = useState('');
    const [customerData, setCustomerData] = useState({
    _id:'',
    CustomerName: '',
    CustomerNumber:'',
    City: '',
    State: '',
    Pincode: ''
  });
    const handleSearch = async () => {
        try {
            const response = await axios.get(`/searchcustomer/${customerNumber}`)
            if(response.data.success)
            {   
                const customer = response.data.data
                setCustomerData({
                _id:customer._id,
                CustomerName: customer.CustomerName,
                CustomerNumber:customer.CustomerNumber,
                City: customer.City,
                State: customer.State,
                Pincode: customer.Pincode})
            }
            else{
                alert(response.data.msg)
            }
        }catch (error) {
        alert("Error Occurred:"+error)
        }
    }
    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/updatecustomer/${customerData._id}`, customerData)
            
            if(response.data.success){
                alert(response.data.msg)
                setCustomerData({
                    CustomerName: '',
                    City: '',
                    State: '',
                    Pincode: ''
                })
                setCustomerNumber('')
            }
        } catch (error) {
        alert("Error Occurred:"+error)
        }
    }
    return(
        <div>
            <h1>Update Customer</h1>
            <label>Customer Number:
                <input type='text' id='customerNumber' value={customerNumber} onChange={(e)=>setCustomerNumber(e.target.value)} />
            </label><br/>
            <button onClick={handleSearch}>Search</button><br/>
            {customerData.CustomerName && (
                <form>
                    <h2>Update Details Here</h2>
                    <label>Customer Name:
                    <input
                        type="text"
                        id="CustomerName"
                        name="CustomerName"
                        value={customerData.CustomerName}
                        onChange={(e) => setCustomerData({ ...customerData, CustomerName: e.target.value })}
                        required />
                    </label><br/>
                    <label>Customer Number:
                    <input
                        type="text"
                        id="CustomerNumber"
                        name="CustomerNumber"
                        value={customerData.CustomerNumber}
                        onChange={(e) => setCustomerData({ ...customerData, CustomerNumber: e.target.value })}
                        required />
                    </label><br/>
                    <label>City:
                    <input
                        type="text"
                        id="City"
                        name="City"
                        value={customerData.City}
                        onChange={(e) => setCustomerData({ ...customerData, City: e.target.value })}
                        required/>
                    </label><br/>
                    <label>State:
                    <input
                        type="text"
                        id="State"
                        name="State"
                        value={customerData.State}
                        onChange={(e) => setCustomerData({ ...customerData, State: e.target.value })}
                        required />
                    </label><br/>
                    <label>Pincode:
                    <input
                        type="text"
                        id="Pincode"
                        name="Pincode"
                        value={customerData.Pincode}
                        onChange={(e) => setCustomerData({ ...customerData, Pincode: e.target.value })}
                        required/>
                    </label><br/>
                    <button type="button" onClick={handleUpdate}>Update</button> 
                </form>
            )}
        </div>)

}
export default UpdateCustomer
