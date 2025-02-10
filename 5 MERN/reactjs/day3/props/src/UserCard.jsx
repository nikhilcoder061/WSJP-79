import React from 'react'

export default function UserCard({ name, email, city, phone }) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Email: {email}</h5>
                    <h5 className="card-title">Contact: {phone}</h5>
                    <h5 className="card-title">City: {city}</h5>
                </div>
            </div>

        </>
    )
}
