import React from 'react';
import style from "../css_modules/lostPageGen.module.css";
import smallDog from "../Images/smalldog.png";
import dogProfile from "../Images/dogProfile.png";
import edit from "../Images/edit.png";
import del from "../Images/delete.png";
import navigation from "../Images/navigation.png";
import facebok from "../Images/faceb.png";
import convert from "../Images/convert.jpg";
import {mapview, postpreview} from "../utils/Constants";
import {SWContext} from "../utils/Context";

const LostPageGen = () => {
    return (
        <SWContext.Consumer>
            {value =>(<div className={`container-fluid col-md-12 m-auto  ${style.container}`}>
            <div className='d-none d-md-block'>
                <div className='d-flex mt-1 justify-content-around mb-5'>
                    <div className='col-md-3'>
                        <button className={`${style.cancel}`}>Type</button>
                    </div>
                    <div className='col-md-3'>
                        <button className={`${style.cancel}`}>Breed</button>
                    </div>
                    <div className='col-md-5'>
                        <button className={`${style.features}`}>Additional features</button>
                    </div>
                </div>
                <div className='d-flex col-md-12 justify-content-around mb-5'>
                    <div className='col-md-6'>
                        <button className={`${style.location}`}>Location</button>
                    </div>
                    <div className='col-md-6 ml-auto'>
                        <button onClick= {() => value.changePage(mapview)} className={`${style.mapView}`}>Map view</button>
                    </div>
                </div>
            </div>
            <div className='d-block d-md-none'>
                <div className='col-10 mt-1'>
                    <button className={`${style.location}`}>Type</button>
                </div>
                <div className='col-10 mt-1'>
                    <button className={`${style.location}`}>Breed</button>
                </div>
                <div className='col-10 mt-1'>
                    <button className={`${style.location}`}>Additional features</button>
                </div>
                <div className='col-10 mt-1'>
                    <button className={`${style.location}`}>Location</button>
                </div>
                <div className='col-10 mt-1'>
                    <button onClick= {() => value.changePage(mapview)} className={`${style.mapView}`}>Map view</button>
                </div>
            </div>
            <div className="row mt-3">
                <div className='col-12 d-sm-block d-md-none ml-auto'>
                    <text className={style.name}>Dog, Golden Retriever</text>
                </div>
            </div>
            <div className='row'>
                <div className="col-5">
                    <img className={style.dogFront} src={dogProfile}/>
                </div>
                <div className="col-7 row ">
                    <div className='col-12 d-flex d-none d-md-block'>
                        <div className='col-8 d-none d-md-block'>
                            <text className={style.name}>Dog, Golden Retriever</text>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-6 '>
                            <div className="d-flex m-auto justify-content-around form-group">
                                <label htmlFor="color" className="col-form-label col-4">Color: &nbsp; </label>
                                <div>
                                    <input className="form-control offset-2 col-7" id="color" placeholder="golden"/>
                                </div>
                            </div>
                            <div className="d-flex  m-auto  justify-content-around form-group">
                                <label htmlFor="sex" className="col-form-label col-4">Sex: &nbsp; </label>
                                <div>
                                    <input className="form-control offset-2 col-7" id="sex" placeholder="mail"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around form-group">
                                <label htmlFor="height" className="col-form-label col-4">Height: &nbsp; </label>
                                <div>
                                    <input className="form-control offset-2 col-7" id="height" placeholder="45 cm"/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 '>
                            <div className="d-flex m-auto justify-content-around form-group">
                                <label htmlFor="features" className="col-form-label col-5">Distinctive features: </label>
                                <div>
                                    <textarea className="form-control offset-1 col-7" id="features"
                                              placeholder="blue collar with stars, no left ear, damaged tail."/>
                                </div>
                            </div>
                        </div>
                        <div className='form-group row col-md-12 d-none d-md-block'>
                            <div className=' d-flex justify-content-around'>
                                <label htmlFor="description"
                                       className="col-form-label mr-1 col-2">Description: </label>

                                <textarea className="form-control col-10 " id="description"
                                          placeholder="Description: brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."/>
                            </div>
                        </div>
                        <div className='form-group row col-md-12 d-none d-md-block'>
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
                    <div className=' d-flex justify-content-around mt-2'>
                        <label htmlFor="description" className="col-form-label mr-1 col-2">Description: </label>

                        <textarea className="form-control offset-1 col-7 " id="description"
                                  placeholder="brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."/>
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
            </div>
        </div>
            )}
        </SWContext.Consumer>);
};

export default LostPageGen;