import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email }
    console.log(user);

    //server site theke data client site a pathassi
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' /><br />
        <input type="text" name='email' /><br />
        <input type="submit" value='add user' />
      </form>
    </>
  )
}

export default App
