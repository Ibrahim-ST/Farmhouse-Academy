import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Login = () => {
    return (
        <>
        <Helmet>
        <title>Login | Farmhouse Academy</title>
        </Helmet>
         <div className="hero min-h-screen bg-[#28a745] text-white">
                <div className="hero-content flex-col md:flex-row">
                    <div className="md:w-1/2 text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Welcome back to our football academy! Log in to your account to continue your football journey with us. We're excited to have you back on board.
                        <br />
                        Logging in allows you to access a range of exclusive features and resources tailored to your needs. Stay up-to-date with the latest academy news, track your progress, and connect with your fellow players
                        </p>
                    </div>
                    <div className="md:w-1/2 card w-full max-w-sm shadow-2xl bg-base-100">
                        <form   className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    {/* <LoadCanvasTemplate /> */}
                                </label>
                                <input   type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

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