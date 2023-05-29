import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Create() {
  const [values, setValue] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  })
  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/users', values)
      .then(res => {
        console.log(res);
        navigate('/')
      }
      )
      .catch(err => console.log(err));
  }
  return (
    <div className="container mt-4">
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" name='name' className="form-control" placeholder="Enter your name"
            onChange={e => setValue({ ...values, name: e.target.value })} />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" name='email' className="form-control" placeholder="Enter your email"
            onChange={e => setValue({ ...values, email: e.target.value })} />
        </div>
        <div className="form-group">
          <label for="phone">Phone</label>
          <input type="tel" name='phone' className="form-control" placeholder="Enter your phone number"
            onChange={e => setValue({ ...values, phone: e.target.value })} />
        </div>
        <div className="form-group">
          <label for="website">Website</label>
          <input type="text" name='website' className="form-control" placeholder="Enter your website URL"
            onChange={e => setValue({ ...values, website: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-success">Back</Link>

      </form>
    </div>

  )
}

export default Create
