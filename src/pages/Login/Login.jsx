import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../shared/SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
      };

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "User login successful.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                navigate(from, { replace: true });
            })
            .catch(error => {
                const msg = error.message;
                console.log(msg)
                if(msg.includes('auth/wrong-password')){
                    Swal.fire({
                        title: 'Wrong Credential.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                }
                else if (msg.includes('auth/user-not-found')){
                    Swal.fire({
                        title: 'User not found.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                }
            })
    }
    return (
        <>
        <Helmet>
        <title>Login | Farmhouse Academy</title>
        </Helmet>
         <div className="hero min-h-screen bg-[#28a745] ">
                <div className="hero-content flex-col md:flex-row">
                    <div className="md:w-1/2 text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Welcome back to our football academy! Log in to your account to continue your football journey with us. We're excited to have you back on board.
                        <br />
                        Logging in allows you to access a range of exclusive features and resources tailored to your needs. Stay up-to-date with the latest academy news, track your progress, and connect with your fellow players
                        </p>
                    </div>
                    <div className="md:w-1/2 card w-full max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handleLogin}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className="input input-bordered" />
                                <span className='absolute top-44 left-80 ' onClick={togglePassword}>
                                {showPassword?<FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>}
                                </span> 
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                             
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn bg-[#28a745] hover:bg-[#25d84f]" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center text-[#28a745]'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;