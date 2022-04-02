import axios from "axios";
import React,{useEffect,useState} from 'react'
import CardList from './CardList'

const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{setUsers(response.data)} )
        .catch( (error)=>console.log(error))});
    return (
        <div className="container">
            {
                users.map(user=><CardList user={user} key={user.id}/>)
            }
        </div>
    )
}

export default UserList