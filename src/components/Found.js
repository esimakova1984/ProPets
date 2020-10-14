import React from 'react';
import style from "../css_modules/lost.module.css";
import mandog from "../Images/manAndDog.png";
import download from "../Images/download.png";
import pig from "../Images/pig.png";
import lapa from "../Images/lapa.png";
import profile from "../Images/profile.png";
import chewbacca from "../Images/friend3.jpg";
import lea from "../Images/friend6.jpg";
import addSign from "../Images/addSighn.png";
import smallDog from "../Images/smalldog.png";

const Found = () => {
    return (
        <div className={`container-fluid col-10 m-auto  ${style.container}`}>
            <div className='row mb-2 pt-1'>
                <div className={`col-12 ${style.header}`}><b>Found a pet?</b> Please complete the form to help.</div>
            </div>
            <form className='row'>
                <div className="col-lg-6">
                    <div className="form-group row">
                        <label htmlFor="type" className="col-2 col-form-label">Type: </label>
                        <select className="col-9 custom-select ml-3" name="type" id="type">
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="parrot">Parrot</option>
                            <option value="pig">Pig</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="sex" className="col-2 col-form-label">Sex: </label>
                        <select className="col-9 custom-select ml-3" name="sex" id="sex">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="breed" className="col-2 col-form-label">Breed: &nbsp; </label>
                        <div className="col-10">
                            <input className="form-control" id="breed" placeholder='Golden Retriever'/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="color" className="col-2 col-form-label">Color: &nbsp; </label>
                        <div className="col-10">
                            <input className="form-control" id="color" placeholder='beige'/>
                        </div>
                    </div>
                    <div className="form-group row ">
                        <label htmlFor="height" className="col-2 col-form-label">Height: </label>
                        <select className="col-9 custom-select ml-3" name="height" id="height">
                            <option value="small">45-70 cm</option>
                            <option value="big">71-90 cm</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group row justify-content-around">
                        <label htmlFor="features" className="col-3 col-form-label">Distinctive features:<br/>
                            <text>up to 60 char</text>
                        </label>
                        <textarea className="col-6 col-lg-8" rows="3" col="10" name='features'
                                  placeholder='blue collar with stars, no left ear, damaged tail.'/>
                    </div>
                    <div className="form-group row justify-content-around">
                        <label htmlFor="description" className="col-3 col-form-label">Description:<br/>
                            <text>up to 150 char</text>
                        </label>
                        <textarea className="col-6 col-lg-8" rows="3" col="10" name='description'
                                  placeholder='brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'/>
                    </div>
                    <div className="form-group row justify-content-around">
                        <label htmlFor="location" className="col-3 col-form-label">Location:<br/>
                        </label>
                        <textarea className="col-6 col-lg-8" rows="3" col="10" name='location'
                                  placeholder='Florentin Street, Tel Aviv'/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={mandog} className={`mb-3 d-none d-md-block  ${style.friends}`} alt="man with dog"/>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={download} className={` ml-4 d-none d-md-block ${style.download}`} alt="download"/><br/>
                            <div className={` d-none d-md-block ${style.drug_drop}`}><b>Drag and drop</b> <br/> <b>photos
                                or</b>
                            </div>
                            <br/>
                            <button className={`${style.browse}`}>Browse</button>
                        </div>
                        <div className="col-lg-6">
                            <div className='row ml-auto mr-auto'>
                                <div className={`d-flex align items center ${style.blockPhoto}`}>
                                    <div>
                                        <div className={`row ml-auto justify-content-around `}>
                                            <text className={style.images}>image1.jpg</text>
                                            <text className={style.imagesX}>x</text>
                                        </div>
                                        <div className={`row ml-auto justify-content-around `}>
                                            <text className={style.images}>image1.jpg</text>
                                            <text className={style.imagesX}>x</text>
                                        </div>
                                        <div className={`row ml-auto justify-content-around `}>
                                            <text className={style.images}>image1.jpg</text>
                                            <text className={style.imagesX}>x</text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-between'>
                    <label htmlFor="contacts"
                           className="col-11 m-auto col-md-2 ml-md-2 col-form-label">Contacts: &nbsp; </label>
                    <div className="col-11 col-md-2 m-auto">
                        <input className="form-control" id="contacts" placeholder='Phone'/>
                    </div>
                    <div className="col-11 col-md-3 m-auto">
                        <input className="form-control" id="email" placeholder='Email'/>
                    </div>
                    <div className="col-11 col-md-3 m-auto">
                        <input className="form-control" id="facebook" placeholder='Facebook profile'/>
                    </div>
                </div>
                <div className='row m-md-2'>
                    <div className="d-flex col-6 ">
                        <img className={`d-none d-lg-block  ${style.smallDog}`} src={smallDog} alt='smallDog'/>
                        <div>
                            <h3 className={`d-none d-lg-block  ${style.user}`}>
                                John Goodboy
                            </h3>
                            <p className={`d-none d-lg-block  {style.hours}`}>
                                2 h
                            </p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <button className={` m-md-2 ${style.submit}`}><img
                            src={lapa}
                            alt={'lapa'}/> Publish</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Found;