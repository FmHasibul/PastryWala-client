import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import { FaDragon } from 'react-icons/fa';
import svg from './undraw_access_account_re_8spm.svg'
import { Link } from 'react-router-dom';

const Register = () => {

    const { createUser, userProfileInfo } = useContext(AuthContext)

    const [userData, setUserData] = useState({ email: "", password: "" })
    const [errMassage, setErrMassage] = useState({ email: "", password: "" })
    const handleEmailChange = (e) => {
        const mail = e.target.value;
        // console.log(email);
        if (!/\S+@\S+\.\S+/.test(mail)) {
            setErrMassage({ ...errMassage, email: "Please use valid email" })
            setUserData({ ...userData, email: '' })
        }
        else {
            setUserData({ ...userData, email: mail })
            setErrMassage({ ...errMassage, email: "" })
            // console.log(userData)
        }
    }
    const handlePassChange = (e) => {
        const pass = e.target.value;
        // console.log(password);
        if (pass.length < 7) {
            setErrMassage({ ...errMassage, password: 'Make it at least 7 character' })
        }
        else {
            setUserData({ ...userData, password: pass })
            setErrMassage({ ...errMassage, password: '' })
        }
        // setUserData(pass)
        // console.log('pass=',userData)
    }

    const submitFunction = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const photo = event.target.photoUrl.value
        const email = userData.email
        // console.log('mail',email);
        const password = userData.password
        console.log(photo, name, password, email);
        // console.log(userData);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                event.target.reset()
                addUserProfileInfo(name, photo)

            })
            .catch(e => console.error('error', e))
    }
    const addUserProfileInfo = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo,
        }
        userProfileInfo(profile)
            .then(() => { })
            .catch((e) => console.log(e))
    }
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content relative flex-col lg:flex-row-reverse">
                <img src={svg} alt="bg-img" className="w-1/2 relative right-5/1 rounded-lg shadow-2xl" />
                <div>
                    <div className='mb-16   mx-auto rounded'>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-conten flex-col ">
                                <div className="text-center ">
                                    <h1 className="text-5xl font-bold">Register Here!</h1>
                                </div>
                                <form onSubmit={submitFunction} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Full Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                name='name'
                                                placeholder="Your full name"
                                                className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo URL</span>
                                            </label>
                                            <input
                                                type="text"
                                                name='photoUrl'
                                                placeholder="Image URL here"
                                                className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input
                                                onChange={handleEmailChange}
                                                type="email"
                                                name='email'
                                                placeholder="email"
                                                className="input input-bordered" required />
                                            {errMassage.email && <p className='text-red-600'><FaDragon />{errMassage.email}</p>}

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input
                                                onChange={handlePassChange}
                                                type="password"
                                                name='password'
                                                placeholder="password"
                                                className="input input-bordered" required />
                                            {errMassage.password && <p className='text-red-600'><FaDragon />{errMassage.password}</p>}
                                            <label className="label">
                                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;