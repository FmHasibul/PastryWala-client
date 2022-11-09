import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { FaGoogle, FaGithub, } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import './Signup.css'

const SignUp = () => {

    const { googleProvider, gitHubLogin } = useContext(AuthContext);

    const gglAuthProvider = new GoogleAuthProvider()

    const gitHubAuthProvider = new GithubAuthProvider()

    const handleGoogle = () => {
        googleProvider(gglAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((e) => {
                console.log('error =', e)
            })
    }
    const handlegitHubLogin = () => {
        gitHubLogin(gitHubAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((e) => {
                console.log('error =', e)
            })
    }
    return (
        <div className='signup my-16'>
            <div className="register card w-80 glass display-flex mx-auto">

                <div className="card-body ">
                    <Link to='/mailregister' className="form-control">
                        <button className="btn input glass text-gray-600 input-bordered gap-2">
                            Login with Your Email
                        </button>
                    </Link>
                    <div className="form-control">
                        <button onClick={handleGoogle} className="btn input glass text-gray-600 input-bordered gap-2">
                            <FaGoogle />
                            Login with Google
                        </button>
                    </div>
                    <div className="form-control">
                        <button onClick={handlegitHubLogin} className="btn glass input text-gray-600 input-bordered gap-2">
                            <FaGithub />
                            Login with GitHub
                        </button>
                    </div>

                    <p className='text-center'>Already Have an accunt?</p>
                    <div className="card-actions justify-center">
                        <Link to='/login'><button className="btn glass text-green-600">Login now!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;