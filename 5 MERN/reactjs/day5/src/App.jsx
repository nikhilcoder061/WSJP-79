import React, { useState } from 'react'
import Layout from './Layout'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";

export default function App() {

  const [allUser, setAllUser] = useState([{ name: 'ws', email: 'ws@gmail.com', phone: 7415296 }]);



  const getData = (event) => {
    event.preventDefault()

    const newData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value
    }
    console.log(newData);

    const oldData = [...allUser];
    oldData.push(newData)
    setAllUser(oldData);

    event.target.reset();
  }


  console.log(allUser);

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-3 text-center">User Information</h2>
      {/* Form */}
      <form className="mb-4" onSubmit={getData}>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control w-full"
              placeholder="Enter your name"
              name='name'
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name='email'
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
              name='phone'
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
      {/* Table */}
      <h3 className="text-center">Submitted Data</h3>
      <div className="table-responsive">
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>



          </thead>
          <tbody>
            {
              allUser.map(
                (user, index) => {
                  return (
                    <UserListItem user={user} index={index} key={index} />
                  )
                }
              )
            }

          </tbody>
        </table>
      </div>
    </div>


  )
}


function UserListItem({ user, index }) {
  const [activeStatus, setActiveStatus] = useState(false);
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td onClick={() => setActiveStatus(!activeStatus)} >
        {
          activeStatus == false ?
            <IoIosCheckmarkCircle />
            :
            <ImCross />
        }


      </td>
    </tr>
  )
}