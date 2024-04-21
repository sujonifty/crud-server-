import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers]=useState(loadedUsers)
    const handleDelete =(_id)=>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('Data deleted successfully');
                const remains = users.filter(user=>user._id !== _id);
                setUsers(remains);
            }
        })
    }
    return (
        <div>
            <h1>{users.length}</h1>  
            <div>
                {
                    users.map(user=><p key={user._id}>
                        {user.name}:{user.email}
                        <button onClick={()=>handleDelete(user._id)}>Delete</button>
                        <Link to={`/update/${user._id}`}><button>Updated</button></Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;