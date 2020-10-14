import React from 'react';
import style from "../css_modules/postpreview.module.css";
import dogProfile from '../Images/dogProfile.png'
import smallDog from "../Images/smalldog.png";
import navigation from "../Images/navigation.png";
import facebok from "../Images/faceb.png";
import convert from "../Images/convert.jpg";
import edit from "../Images/edit.png"
import lapa from "../Images/lapa.png";
import {postpreview, homePage} from "../utils/Constants";

const PostPreview = () => {
    return (
        <div className={`container-fluid col-lg-10 m-auto  ${style.container}`}>
            <div className='row mb-2  pt-1'>
                <div className={`col-12 ${style.header}`}><b>Preview and Publish?</b> Please share the post to your FB
                    to be more effective.
                </div>
            </div>
            <div className="row">
                <div className='col-12 d-sm-block d-md-none ml-auto'>
                    <text className={style.name}>Dog, Golden Retriever</text>
                </div>
            </div>
            <form className='row'>
                <div className="col-5">
                    <img className={style.dogFront} src={dogProfile}/>
                </div>
                <div className="col-7 row">
                    <div className='col-12 d-none d-lg-block ml-auto'>
                        <text className={style.name}>Dog, Golden Retriever</text>
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
                                <label htmlFor="description" className="col-form-label mr-1 col-2">Description: </label>

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
                <div className='row   m-auto pt-1'>
                    <div className={`col-12 ${style.header}`}>Fingers crossed. We wish your fluffy to be found as soon
                        as possible. Your post will expire in two weeks. To make it active again follow the instructions
                        you’ll get in email.
                    </div>
                </div>
                <div className=' row col-12'>
                    <div className="form-check col-md-5 ml-2">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            <text className={style.share}>Share to Facebook</text>
                        </label>
                    </div>
                    <div className='col-md-6 '>
                        <div className='d-flex justify-content-around  ml-auto'>
                        <button className={` ${style.edit}`}>Edit</button>
                        <button className={`ml-2 ${style.submit}`}><span><img
                            src={lapa}
                            alt={'lapa'}/> Publish</span></button>
                         </div>
                    </div>
                </div>
                <div className={`d-flex col-9 justify-content-end  ml-3 mt-2  ${style.hint}`}>
                    By clicking “Publish”, you agree to us processing your information in accordance with these terms.
                    </div>
            </form>

        </div>
    );
};

export default PostPreview;