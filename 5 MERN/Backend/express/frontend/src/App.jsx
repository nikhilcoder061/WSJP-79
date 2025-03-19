import React, { useEffect, useState } from 'react'
import Form from './Form'
import Table from './Table'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {

  const [allUser, setAllUser] = useState([]);

  const toastMsg = (msg, status) => {
    toast(msg, { type: status == true ? 'success' : 'error' });
  }


  // get all user start 
  const getUserData = () => {

    axios.get('http://localhost:5001/user').then(
      (success) => {
        setAllUser(success.data.users);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )

  }
  // get all user end


  // create user start

  const addUser = (event) => {
    event.preventDefault();

    const newUserData = {
      name: event.target.name.value,
      email: event.target.email.value,
      age: event.target.age.value,
      phone: event.target.phone.value,
      password: event.target.password.value
    }

    axios.post("http://localhost:5001/user/register", newUserData).then(
      (success) => {
        toastMsg(success.data.msg, success.data.status);
        if (success.data.status == 1) {
          getUserData();
          event.target.reset();
        }
      }
    ).catch(
      (error) => {
        console.log(error);
        toastMsg(error.data.msg, error.data.status);
      }
    )

  }

  // create user end

  // delete user start 

  const deleteUser = (id) => {

    if (confirm("Are you sure ")) {
      axios.delete(`http://localhost:5001/user/delete/${id}`).then(
        (success) => {
          toastMsg(success.data.msg, success.data.status);
          getUserData();
        }
      ).catch(
        (error) => {
          console.log(error);
          toastMsg(error.data.msg, error.data.status);
        }
      )
    }


  }


  // delete user end

  // status update start 

  const statusUpdate = (id) => {

    axios.patch(`http://localhost:5001/user/status/${id}`).then(
      (success) => {
        toastMsg(success.data.msg, success.data.status);
        getUserData();
      }
    ).catch(
      (error) => {
        console.log(error);
        toastMsg(error.data.msg, error.data.status);
      }
    )

  }

  // status update End

  useEffect(
    () => {
      getUserData();
    }, []
  )

  return (
    <div className='flex mx-auto mt-2'>
      <ToastContainer autoClose={500} />
      {/* form start  */}
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">User Information Form</h2>
        <form onSubmit={addUser}>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required=""
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required=""
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required=""
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="age" className="font-medium mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required=""
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required=""
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* form end */}

      {/* Table start */}
      <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">User Data Table</h2>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-left">Age</th>
              <th className="px-6 py-3 text-center">Active</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              allUser.map(
                (userData, userIndex) => {
                  console.log(userData);
                  return (
                    <tr className="border-b">
                      <td className="px-6 py-2">{userData.name}</td>
                      <td className="px-6 py-2">{userData.email}</td>
                      <td className="px-6 py-2">{userData.phone}</td>
                      <td className="px-6 py-2">{userData.age}</td>
                      <td className="px-6 py-2 text-center">
                        {
                          userData.status == true
                            ?
                            <button onClick={() => statusUpdate(userData._id)} className="px-4 py-2 bg-green-500 text-white rounded-lg">
                              Active
                            </button>
                            :
                            <button onClick={() => statusUpdate(userData._id)} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
                              InActive
                            </button>
                        }
                      </td>
                      <td className="px-6 py-2 text-center">
                        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
                          Edit
                        </button>
                        <button onClick={() => deleteUser(userData._id)} className="px-4 py-2 bg-red-500 text-white rounded-lg ml-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                }
              )
            }
            {/* Example Row 1 */}

          </tbody>
        </table>
      </div>
      {/* Table end */}

    </div>
  )
}
