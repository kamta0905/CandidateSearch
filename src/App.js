import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [users, setUsers] = useState([]);
  const [search, searchTerm] = useState("")
  const getUsers = async () => {
    const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json');
    setUsers(await response.json())
  }
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <input className="search" type="text" placeholder="Search by name" onChange={(event) => {
        searchTerm(event.target.value)
      }} />
      <button className="btn">Search</button>

      {
        users.filter((i) => {
          if (search === "") {
            return i;
          } else if (i.name.toLowerCase().includes(search.toLowerCase())) {
            return i
          }
        }).map((i, key) => {
          return (
            <>
              <div className="all" key={key}>
                <div className="image" ><img src={i.Image} /></div>
                <div className="name">{i.name}</div>
                <div className="id">{i.id}</div>
              </div>


            </>
          )
        })

      }

    </div >
  )
}

export default App;
