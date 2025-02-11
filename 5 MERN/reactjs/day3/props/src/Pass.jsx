import React, { useState } from 'react'

export default function Pass() {

    const [showPass, setShowPass] = useState(false);

    const showHidePass = () => {
        // if (showPass == true) {
        //     setShowPass(false)
        // } else {
        //     setShowPass(true)
        // }
        setShowPass(!showPass);
    }

    return (
        <div className='d-flex mx-auto my-4 w-75 gap-5'>
            <input type={showPass == false ? 'password' : 'text'} className='form-control' />
            <button className='btn btn-primary' onClick={showHidePass}>{showPass == false ? 'Show' : 'Hide'} Password</button>
        </div>
    )
}
