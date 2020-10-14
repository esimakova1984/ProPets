import React from 'react';
import style from "../CSS_modules/StartPage.module.css";
import component from '../Images/component.svg';
import dog from '../Images/dog.png';
import lupalapa from '../Images/lupalapa.svg';
import animals from '../Images/animals.png';
import heart from '../Images/heart2.png';
import logoFooter from '../Images/logoFooter.svg';
import lapa from '../Images/found.png';
import lupa from '../Images/lupa.png';
import hotel from '../Images/hotel1.png';
import walking from '../Images/walking.png';
import vetHelp from '../Images/vetHelp.png';
import fostering from '../Images/fostering.png';



const StartPage = () => {
    return (

        <div className='container-fluid'>

            <header>
                <div className={`col-12 ${style.header}`}>
                    <div className='container-fluid'>
                        <div className='row no-gutters'>

                            <div className={`col-2 ${style.logo} `}>
                                <img src={component} alt={'o'}/></div>
                            <button className={`col-1 ml-auto ${style.signIn}`}>Sign in</button>
                        </div>
                    </div>
                </div>
            </header>

            <main>

                <div className={`row d-inline-flex flex-row`}>
                    <div className={style.content1}>
                        <div className={`col-l-6 col-12 ${style.text}`}>
                            <h2 className={style.welcome}>Welcome to your <span
                                className={style.pawfessional}>pawfessional</span> community
                            </h2>
                        </div>
                    </div>

                    <div>
                        <div className={`col-l-6  col-6 float-right`}><img src={dog} alt={'d'}/></div>
                    </div>

                    <div className={style.buttons}>
                        <div>
                            <button className={`col-7 ${style.lost}`}>I lost my pet!
                                <img src={lupalapa}/>
                            </button>
                        </div>
                        <div>
                            <button className={`col-5 ${style.found}`}>I found a pet!</button>
                        </div>
                        <div className={`col-l-6 col-12 ${style.link}`}>I’m okay, just want to<a href="#" className={style.join}
                                                                                      target="_blank"> join</a> the
                            pawsome
                            community!
                        </div>
                    </div>
                    <div className={`col-12 ${style.content2}`}>
                        <h1 className={`col-12 ${style.text2}`}>Our fluffy space for lovers, admirers, dads and moms of our
                            four-legged,
                            winged,
                            tailed guys.
                        </h1>
                    </div>
                    <div className={style.content3}>
                        <div className={`row`}>
                            <div className={`col-l-5 col-12 ${style.animals}`}>
                                <img src={animals}/>
                            </div>

                            <div className={`col-l-7 col-12 ${style.list}`}>
                                <h2>Here is collected everything that your pet needs:</h2>
                                <ul>
                                    <li> professional veterinarian tips;</li>
                                    <li> useful information about education and care;</li>
                                    <li> fostering home search;</li>
                                    <li> information about pet-sitting and walking service;</li>
                                    <li> and of course, great communication with new friends in your social
                                        network!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`container-fluid`}>
                        <div className={`row`}>
                            <div className={style.redContent}>
                                <div className={`col-xl-5 col-12 ${style.comingSoon}`}>Coming soon</div>
                                <div className={`col-xl-5 col-12 ${style.text3}`}>We are planing to open a new service, where
                                    your
                                    cats and
                                    dogs
                                    can
                                    find their love!
                                </div>
                                <div className={`col-xl-2 ${style.heart}`}>
                                    <div className={`img-wrap`}>
                                        <img
                                            src={heart} alt={'heart'}/>
                                        <div className={style.love}>love</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className={`col-l-12 col-12  align-items-center ${style.greenFooter}`}>
                    <div className={`col-xl-4 col-6  pr-0 ${style.logoFooter}`}>
                        <img src={logoFooter} alt={'o'}/>
                    </div>
                    <div className={`col-xl-4 ${style.signts}`}>
                        <i className="fa fa-facebook"></i>
                        <div className={style.logoFb}> FB</div>
                        <p>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</p>
                    </div>
                    <div className={`col-xl-4 col-6 ${style.links}`}>
                        <div>
                            <img
                                src={lupa} alt={'lupa'}/><a href='#' className={`${style.footerLost} pr-lg-4`}
                                                            target='_blank'> Lost</a>
                            <img src={hotel}
                                 alt={'hotel'}/><a href='#' className={`${style.footerHotel} pr-lg-4`}
                                                   target='_blank'> Hotel</a>
                        </div>
                        <div>
                            <img src={lapa} alt={'lapa'}/><a href='#' className={`${style.footerFound} pr-lg-4`}
                                                             target='_blank'> Found</a>
                            <img
                                src={walking} alt={'walking'}/><a href='#' className={`${style.footerWalking} pr-lg-4`}
                                                                  target='_blank'> Walking</a>
                        </div>
                        <div>
                            <img
                                src={vetHelp} alt={'vetHelp'}/><a href='#' className={`${style.footerVetHelp} pr-lg-4`}
                                                                  target='_blank'> VetHelp</a>
                            <img
                                src={fostering} alt={'fostering'}/><a href='#' className={`${style.footerFostering} pr-lg-4`}
                                                                      target='_blank'> Fostering</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );
};

export default StartPage;