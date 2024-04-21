import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUsers = useLoaderData();
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email }
        console.log(updatedUser);
//put method er madhome server a data pathassi
        fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                alert('Data updated successfully');
                // const remains = users.filter(user=>user._id !== _id);
                // setUsers(remains);
            }
        })
    }
    return (
        <div>
            <h1>Updated info of: {loadedUsers.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' defaultValue={loadedUsers?.name} /><br />
                <input type="text" name='email' defaultValue={loadedUsers?.email} /><br />
                <input type="submit" value='Updated' />
            </form>
        </div>
    );
};

export default Update;