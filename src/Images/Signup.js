import style from "../css_modules/signup.module.css";
import React from "react";
import {Facebook} from 'react-feather';
import ooo from "../Images/ooo.png";
import lapa from "../Images/lapa.png"
import logo from "../Images/greenPropetsLogo.png";

const Signup = () => {
    return (
            <div className={`container-fluid col-md-8 col-lg-6  ${style.signInForm}`}>
                <div className="row">
                    <div className="col-12 mb-md-1">
                        <img className={style.logo} src={logo}/>
                    </div>
                    <span className={style.close}></span><br/>
                </div>
                <div className={`row mt-1`}>
                    <div
                        className={`col-md-9  ${style.welcome}`}><b>Welcome!</b> Please sign in/sign up to continue or
                    </div>
                    <div className={`col-md-3 d-none d-md-block text-center ${style.facebook}`}><Facebook> <span
                        className={style.logo}></span></Facebook>Enter with Facebook
                    </div>
                </div>
                <div className="row mb-1 justify-content-center">
                    <button className={` col-5  ${style.signButtons}`}>
                        <text className={style.buttonText}>Sign up</text>
                    </button>
                    <button className={` col-5  ${style.signButtons}`} style={{opacity: 0.28}}>
                        <text className={style.buttonText}>Sign in</text>
                    </button>
                </div>
                <form className="mt-2">
                    <div className="form-group row col-md-6">
                        <label htmlFor="name" className="col-2 col-form-label">Name: &nbsp; </label>
                        <div className="col-9 ml-auto">
                            <input className="form-control" id="name" style={{textDecoration:"underline"}}placeholder='Helen Johnson'/>
                        </div>
                    </div>
                    <div className="form-group row col-md-6">
                        <label htmlFor="email" className="col-2 col-form-label">Email: &nbsp; </label>
                        <div className="col-9 ml-auto">
                            <input className="form-control" id="email" style={{textDecoration:"underline"}} placeholder='helenjohnson@gmail.com'/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className='col-md-6 d-flex'>
                            <label htmlFor="password" className=" col-form-label">Password: &nbsp; </label>
                            <div>
                                <input className="form-control" id="password" placeholder='**********'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <text className={style.password}>Password must have at least 8 characters with at
                                least one Capital letter, at least one lower case letter and at least one number or
                                special character.
                            </text>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className='col-md-6 d-flex'>
                            <label htmlFor="password" className=" col-form-label">Password: &nbsp; </label>
                            <div>
                                <input className="form-control" id="password" placeholder='**********'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <text className={style.password}>Please re-enter your password
                            </text>
                        </div>
                    </div>
                    <div className={`row mt-1`}>
                        <div className={`col-9 mb-1 d-sm-block mr-3 d-md-none text-center ${style.facebook}`}><Facebook> <span
                            className={style.logo}></span></Facebook>Enter with Facebook
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-5'>
                            <text className={style.password}>
                                By clicking “Submit”, you agree to us processing your information
                                in accordance with these terms.
                            </text>
                        </div>
                        <button className={`col-md-2 ${style.cancel}`}>Cancel</button>
                        <button className={`col-md-3 offset-1 ${style.submit}`}><span><img className={style.lapa}
                                                                                        src={lapa} alt={'lapa'}/>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
    );
};

export default Signup;
