import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        
        const userData = {
            username, email, password
        }
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/accounts/register/', userData)
            console.log('Registration Successful! ',response.data)
            setErrors({})
            setSuccess(true)
        } catch(error) {
            setErrors(error.response.data)
            console.log('Registration failed! ', error.response.data)
        } finally {
            setLoading(false)
        }
    } 

    return (
        <>
            <div className="container ">
                <div className="row justify-Content-center">
                    <div className="col-md-6 bg-light-dark rounded p-5">
                        <h2 className='text-center pb-3'>REGISTRATION FORM</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" className='form-control' placeholder='Enter Userename' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                                <small>{errors.username && <div className='text-warning '>{errors.username}</div> }</small>
                            </div>
                            <div className="mb-3">
                                <input type="email" className='form-control' placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                <small>{errors.email && <div className='text-warning '>{errors.email}</div> }</small>
                            </div>
                            <div className="mb-4">
                                <input type="password" className='form-control' placeholder='Set Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                <small>{errors.password && <div className='text-warning '>{errors.password}</div> }</small>
                            </div>
                            { success && <div className='form-control alertsuccess mb-3'>Registration Successful! </div>}
                            { loading ? <button type='submit' className='form-control btn-info mb-3 '>Please Wait...</button> : <button type='submit' className='form-control btn-info mb-3 '>Register</button>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register