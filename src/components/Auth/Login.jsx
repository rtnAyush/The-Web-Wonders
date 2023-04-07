import React, { useEffect, useState } from 'react'
import './Auth.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../context/index/StateProvider';
import StudentDataService from '../../services/student.service'



const Login = () => {
    // eslint-disable-next-line
    const [{ }, dispacher] = useStateValue()
    const [students, setStudents] = useState([]);
    const [uid, setUid] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()


    useEffect(() => {
        getStudents()

    }, [])




    const getStudents = async () => {
        const data = await StudentDataService.getAllStudents();
        // console.log(data.docs);
        setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    const handleUIDSubmit = (e) => {

        e.preventDefault()

        const user = students.filter((s) => {
            return s.roll === uid
        })

        if (user.length !== 0) {
            dispacher({
                type: 'SET_USER',
                payload: user[0]
            })


            localStorage.setItem('id', user[0].id);

            navigate('/')
        } else {
            setError('User does not exits')
        }
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



    return (
        <div className="auth">
            <p>{error}</p>
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
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        label="User Id"
                        type="text"
                        autoComplete="current-password"
                        required
                    />

                    <Button
                        onClick={handleUIDSubmit}
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
                        disabled
                        label="UserName"
                        type="text"
                        autoComplete="current-password"
                        required
                    />

                    <TextField
                        disabled
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        required
                    />

                    <Button
                        disabled
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