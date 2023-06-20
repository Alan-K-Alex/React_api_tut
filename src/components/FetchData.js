import {useEffect} from 'react'
import axios from 'axios'

import {useState} from 'react'


function FetchData()
{
    const [data,setData] = useState([])

    useEffect(()=>{

        axios.get("https://dummyjson.com/users")
        .then(res=>setData(res.data.users))
        .catch(err=>console.log(err))


    },[])


return(
<div className='container'>
    <div className='mt-3'>
        <h3>Fetching Data in React with Axios API</h3>
        <table >
        <thead>
    <tr>
        <th>&nbsp;&nbsp;ID&nbsp;&nbsp;&nbsp;</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Age&nbsp;&nbsp;</th>
        <th>Gender&nbsp;&nbsp;</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Username</th>
        <th>birthDate</th>
        <th>Image&nbsp;&nbsp;</th>
        <th>Height</th>
        <th>Weight</th>
        <th>City</th>
        <th>cardExpire</th>
        <th>Company Name</th>
    </tr>
        </thead>
        <tbody>
{
        data.map((user,index)=>{

return <tr >
    <td>{user.id}</td>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.age}</td>
    <td>{user.gender}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>{user.username}</td>
    <td>{user.birthDate}</td>
    <td><img width="60" height="60" src={user.image} alt="img"/></td>
    <td>{user.height}</td>
    <td>{user.weight}</td>
    <td>{user.address.city}</td>
    <td>{user.bank.cardExpire}</td>
    <td>{user.company.name}</td>

</tr>
})
}
        </tbody>

        </table>
    </div>
</div>


)



}

export default FetchData;