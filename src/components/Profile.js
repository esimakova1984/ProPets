import React from 'react';
import style from "../css_modules/profile.module.css";
import smallDog from "../Images/smalldog.png";
import pig from "../Images/pig.png"
import facebok from "../Images/faceb.png";
import convert from "../Images/convert.jpg";
import edit from '../Images/edit.png'
import save from '../Images/save.png'
import lapa from "../Images/lapa.png";
import {SWContext} from "../utils/Context";
import {profile, activities} from "../utils/Constants";

const Profile = () => {
    return (
        <SWContext.Consumer>
            {value => (<div className={`container-fluid col-lg-10 m-auto  ${style.container}`}>
            <div className='row mb-1  pt-1'>
                <div className={`col-12 ${style.header}`}><b>Your profile.</b> Change, edit and manage your data.
                </div>
            </div>
            <div className="row mb-1 justify-content-center">
                <button className={` col-5  ${style.signButtons}`}>
                    <text className={style.buttonText}>My profile</text>
                </button>
                <button onClick={() => value.changePage(activities)} className={` col-5  ${style.signButtons}`} style={{opacity: 0.28}}>
                    <text className={style.buttonText}>Activities</text>
                </button>
            </div>
            <div className="row col-md-5 mt-3">
                <img src={pig} alt='pig'/>
                <div className='ml-4'>
                    <h3 className={style.user}>
                        Anna Smith
                    </h3>
                </div>
                <div className='ml-1'>
                    <img className={style.smallIcons} src={edit} alt='edir'/>
                </div>
            </div>
            <form className="mt-2">
                <div className="form-group row col-md-8">
                    <label htmlFor="email" className={`col-2 col-form-label ${style.label}`}>Email: &nbsp; </label>
                    <div className="col-9 ml-auto">
                        <input className="form-control" id="email" style={{textDecoration: "underline"}}
                               placeholder='helenjohnson@gmail.com'/>
                    </div>
                </div>
                <div className="form-group row col-md-8">
                    <label htmlFor="phone" className={`col-2 col-form-label ${style.label}`}>Phone: &nbsp; </label>
                    <div className="col-9 ml-auto">
                        <input className="form-control" id="phone" style={{textDecoration: "underline"}}
                               placeholder='000-000-00-00'/>
                    </div>
                </div>
                <div className="form-group row col-md-8">
                    <label htmlFor="fb" className={`col-3 col-form-label ${style.label}`}>FB link: &nbsp; </label>
                    <div className="col-9 ml-auto">
                        <input className="form-control" id="fb" style={{textDecoration: "underline"}}
                               placeholder='https://www.facebook.com/anna.smith908430'/>
                    </div>
                </div>
                <div className='d-none d-md-block'>
                    <div className='d-flex  justify-content-end mb-5'>
                        <button className={`col-md-2  ${style.cancel}`}>Cancel</button>
                        <button className={`col-md-3 offset-1 ${style.submit}`}><span><img className={style.lapa}
                                                                                           src={save} alt={'save'}/>Save changes</span>
                        </button>
                    </div>
                </div>
                <div className='d-block d-md-none'>
                    <div className='d-flex justify-content-end mb-5'>
                        <button className={`col-10 mr-4 ${style.submit}`}><span><img className={style.lapa}
                                                                                 src={save}
                                                                                 alt={'save'}/>Save changes</span>
                        </button>
                    </div>
                    <div className='d-flex justify-content-end mb-5'>
                        <button className={`col-10 mr-4  ${style.cancel}`}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>)}
                </SWContext.Consumer>
    );
};

export default Profile;