import React from 'react'
import './Auth.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../context/index/StateProvider';



const Login = () => {
    // eslint-disable-next-line
    const [{ }, dispacher] = useStateValue()
    const navigate = useNavigate()


    const handleUIDSubmit = (e) => {
        e.preventDefault()

        dispacher({
            type: 'SET_USER',
            payload: {
                username: 'Ayush',
            }
        })
        navigate('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispacher({
            type: 'SET_USER',
            payload: {
                username: 'Ayush',
            }
        })
        navigate('/')
    }


    // const handleGoogleLogin = (e) => {
    //     if (!user) {
    //         navigate('/')
    //     }
    // }


    return (
        <div className="auth">

            <div className="login">
                <div className="logo">
                    SMS
                </div>

                <h1>Sign With  SMS</h1>

                {/* <div className="google__login" onClick={handleGoogleLogin}>
                    <button type="button" className="login-with-google-btn" >
                        Sign in with Google
                    </button>
                </div> */}


                <form className="manual__login" onSubmit={handleUIDSubmit}>

                    <div className="divider">
                        <span className="line"></span>
                        <span className="text">Student Login</span>
                        <span className="line"></span>
                    </div>

                    <TextField
                        label="User Id"
                        type="text"
                        autoComplete="current-password"
                        required
                    />

                    <Button
                        type='submit'
                        variant="contained"
                    >
                        Take Me In
                    </Button>

                </form>


                <form className="manual__login" onSubmit={handleSubmit}>

                    <div className="divider">
                        <span className="line"></span>
                        <span className="text">Admin Login</span>
                        <span className="line"></span>
                    </div>

                    <TextField
                        label="UserName"
                        type="text"
                        autoComplete="current-password"
                        required
                    />

                    <TextField
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        required
                    />

                    <Button
                        type='submit'
                        variant="contained"
                    >
                        Sign In
                    </Button>

                </form>


            </div>
        </div>
    )
}

export default Login