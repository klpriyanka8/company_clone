import React from 'react'
import {Link} from 'react-router-dom'

const Homepage=({ handleLogout })=>{
    return(
        <div>
            <h2>Company Data</h2>
            <nav>
                <ul>
                    <li><Link to='/addcustomer'>Addcustomer</Link></li>
                    <li><Link to='/displaycustomer'>Displaycustomer</Link></li>
                    <li><Link to='/updatecustomer'>Updatecustomer</Link></li>
                    <li><Link to='/searchcustomer'>Searchcustomer</Link></li>
                    <li><Link to='/deletecustomer'>Deletecustomer</Link></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            </nav>
        </div>
    )
}
export default Homepage;