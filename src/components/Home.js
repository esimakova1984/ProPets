import React from 'react';
import style from "../css_modules/home.module.css";
import smallDog from "../Images/smalldog.png"
import dogProfile from "../Images/dogProfile.png"

const Home = () => {
    return (
        <div className={`container-fluid col-10 ml-auto m-auto ${style.container}`} >
            <div className='row pt-1 pt-md-2 mb-2'>
                <div className='col-lg-9'>
                    <div className="d-flex">
                        <img className={style.smallDog} src={smallDog} alt='smallDog'/>
                        <div>
                            <h3 className={style.user}>
                                John Goodboy
                            </h3>
                            <p className={style.hours}>
                                2 h
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-8 m-auto`}>
                    <text className={style.post}>
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk
                        MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad
                        nymph, for jigs vex! Fox nymphs grab quick-jived waltz. Brick whangs jumpy veldt
                        fox. Bright vixens jump; dozy fowl quack <a href="*">…more</a>
                    </text>
                </div>
            </div>

            <div className='row pt-1 pt-md-2 mb-2'>
                <div className='col-lg-9'>
                    <div className="d-flex">
                        <img className={style.smallDog} src={smallDog} alt='smallDog'/>
                        <div>
                            <h3 className={style.user}>
                                John Goodboy
                            </h3>
                            <p className={style.hours}>
                                2 h
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-8 m-auto`}>
                    <img className={`mb-2 ${style.dogFront}`} src={dogProfile} alt='smallDog'/>
                    <text className={style.post}>
                        Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy
                        fowl quack  <a href="*">…more</a>
                    </text>
                </div>
            </div>
        </div>
    );
};

export default Home;