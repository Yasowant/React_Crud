import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



function Update() {
    const { id } = useParams();
    const [values, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        website: ''
    })
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:4000/users/' + id)
            .then(res => {
                setValue(res.data);

            })
            .catch(err => console.log(err));

    }, [id])

    const handelUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:4000/users/${id}`, values)
            .then(res => {
                console.log(res);
                navigate('/')
            }
            )
            .catch(err => console.log(err));

    }
    return (

        <div className="container mt-4">
            <h1>Update User</h1>
            <form onSubmit={handelUpdate}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" name='name' className="form-control" placeholder="Enter your name"
                        value={values.name} onChange={e => setValue({ ...values, name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter your email"
                        value={values.email} onChange={e => setValue({ ...values, email: e.target.value })} />
                </div>
                <div className="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" name='phone' className="form-control" placeholder="Enter your phone number"
                        value={values.phone} onChange={e => setValue({ ...values, phone: e.target.value })} />
                </div>
                <div className="form-group">
                    <label for="website">Website</label>
                    <input type="text" name='website' className="form-control" placeholder="Enter your website URL"
                        value={values.website} onChange={e => setValue({ ...values, website: e.target.value })} />
                </div>
                <button type='submit' className="btn btn-success">Update</button>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>

            </form>
        </div>

    )
}

export default Update