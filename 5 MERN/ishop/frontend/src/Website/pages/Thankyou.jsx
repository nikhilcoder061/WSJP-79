import React from 'react'
import { useParams } from 'react-router-dom'

export default function Thankyou() {
    const { order_id } = useParams()
    return (
        <div>Thankyou For this Order {order_id}</div>
    )
}
