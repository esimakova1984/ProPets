import React from 'react';
import style from "../css_modules/activities.module.css";
import {activities, profile} from "../utils/Constants";
import {SWContext} from "../utils/Context";
import dogProfile from "../Images/dogProfile.png";
import navigation from "../Images/navigation.png";
import smallDog from "../Images/smalldog.png";
import facebok from "../Images/faceb.png";
import convert from "../Images/convert.jpg";
import lapa from "../Images/lapa.png";
import edit from "../Images/edit.png"
import del from '../Images/delete.png'

const Activities = () => {
    return (
        <SWContext.Consumer>
            {value => (<div className={`container-fluid col-lg-10 m-auto  ${style.container}`}>
                <div className='row mb-1  pt-1'>
                    <div className={`col-12 ${style.header}`}><b>Your activities.</b> Change, edit and manage your
                        posts.
                    </div>
                </div>
                <div className="row mb-1 justify-content-center">
                    <button onClick={() => value.changePage(profile)} className={` col-5  ${style.signButtons}`}>
                        <text className={style.buttonText}>My profile</text>
                    </button>
                    <button className={` col-5  ${style.signButtons}`} style={{opacity: 0.28}}>
                        <text className={style.buttonText}>Activities</text>
                    </button>
                </div>
                <div className="row mt-3">
                    <div className='col-12 d-sm-block d-md-none ml-auto'>
                        <text className={style.name}>Dog, Golden Retriever</text>
                    </div>
                </div>
                <form className='row'>
                    <div className="col-5">
                        <img className={style.dogFront} src={dogProfile}/>
                    </div>
                    <div className="col-7 row ">
                        <div className='col-12 d-flex d-none d-lg-block'>
                            <div className='col-8 d-none d-lg-block'>
                                <text className={style.name}>Dog, Golden Retriever</text>
                            </div>
                            <div className='col-3 ml-auto'>
                                <img className={style.smallIcons} src={edit} alt='edit'/>
                                <img className={style.smallIcons} src={del} alt='delete'/>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-lg-6 '>
                                <div className="d-flex m-auto justify-content-around form-group">
                                    <label htmlFor="color" className="col-form-label">Color: &nbsp; </label>
                                    <div>
                                        <input className="form-control" id="color" placeholder="golden"/>
                                    </div>
                                </div>
                                <div className="d-flex  m-auto  justify-content-around form-group">
                                    <label htmlFor="sex" className="col-form-label">Sex: &nbsp; </label>
                                    <div>
                                        <input className="form-control" id="sex" placeholder="mail"/>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around form-group">
                                    <label htmlFor="height" className="col-form-label">Height: &nbsp; </label>
                                    <div>
                                        <input className="form-control" id="height" placeholder="45 cm"/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 '>
                                <div className="d-flex m-auto justify-content-around form-group">
                                    <label htmlFor="features" className="col-form-label">Distinctive features: </label>
                                    <div>
                                    <textarea className="form-control" id="features"
                                              placeholder="blue collar with stars, no left ear, damaged tail."/>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group row col-lg-12 d-none d-lg-block'>
                                <div className=' d-flex justify-content-around'>
                                    <label htmlFor="description"
                                           className="col-form-label mr-1 col-2">Description: </label>

                                    <textarea className="form-control col-8 " id="description"
                                              placeholder="Description: brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."/>
                                </div>
                            </div>
                            <div className='form-group row col-lg-12 d-none d-lg-block'>
                                <div className=' col-12 ml-1'>
                                    <img src={navigation} alt='navigation'/>
                                    <text className={style.address}>&nbsp; Florentin, 27, Tel-Aviv</text>
                                </div>
                                <div className="d-flex mt-1">
                                    <img className={style.smallDog} src={smallDog} alt='smallDog'/>
                                    <div>
                                        <h3 className={style.user}>
                                            John Goodboy
                                        </h3>
                                        <p className={style.hours}>
                                            Dec 12, 2019
                                        </p>
                                    </div>
                                    <div className='ml-auto'>
                                        <img className={style.smallIcons} src={facebok} alt='facebook'/>
                                        <img className={style.smallIcons} src={convert} alt='convert'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form-group row d-sm-block d-md-none'>
                        <div className=' d-flex justify-content-around'>
                            <label htmlFor="description" className="col-form-label mr-1 col-2">Description: </label>

                            <textarea className="form-control col-8 " id="description"
                                      placeholder="Description: brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."/>
                        </div>
                    </div>
                    <div className='form-group row d-sm-block d-md-none'>
                        <div className=' col-12 ml-1'>
                            <img src={navigation} alt='navigation'/>
                            <text className={style.address}>&nbsp; Florentin, 27, Tel-Aviv</text>
                        </div>
                        <div className="d-flex mt-1">
                            <img className={style.smallDog} src={smallDog} alt='smallDog'/>
                            <div>
                                <h3 className={style.user}>
                                    John Goodboy
                                </h3>
                                <p className={style.hours}>
                                    Dec 12, 2019
                                </p>
                            </div>
                            <div className='ml-auto'>
                                <img className={style.smallIcons} src={facebok} alt='facebook'/>
                                <img className={style.smallIcons} src={convert} alt='convert'/>
                            </div>
                        </div>
                    </div>

                </form>
            </div>)}
        </SWContext.Consumer>
    );
};

export default Activities;