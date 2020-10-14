import React from 'react';
import style from '../../CSS_modules/ServiceHotels.module.css';
import logo from '../../Images/greenPropetsLogo.png';
import home from '../../Images/home.png';
import lupa from '../../Images/lupa.png';
import speaker from '../../Images/speaker.png';
import found from '../../Images/found.png';
import star from '../../Images/star.jpg';
import logout from '../../Images/logout.png';
import photo from '../../Images/profile.png';
import smallDog from '../../Images/smalldog.png';
import korgy from '../../Images/korgy.png';
import a1 from '../../Images/a1.png';

const Hotels = () => {
    return (
        <div className={`container-fluid`}>
            <div className={style.header}>
                <div className={`row`}>
                    <div className={`col-lg-3 pl-xl-5 ml-xl-5 pl-lg-3 pb-2 pt-2`}>
                        <img className={style.logo} src={logo}/>
                    </div>
                    <div className={`col-3 ml-auto`}>
                        <button className={`d-none d-lg-block mt-3 ${style.addNew}`}>+ AddNew</button>
                    </div>
                </div>
            </div>
            <div className={`container-fluid`}>
                <div className={style.main}>
                    <div className={`row`}>
                        <nav
                            className={` navbar navbar-expand-lg  navbar-dark fixed-left col-lg-3 ${style.navigation}`}>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar">
                                    <div className={`ml-1 ${style.flexy}`}>
                                        <li>
                                            <button className={style.navItem}><img src={home} alt={'home'}/> Home
                                            </button>
                                        </li>
                                        <li>
                                            <button className={style.navItem}><img src={lupa} alt={'lost'}/> Lost
                                            </button>
                                        </li>
                                        <li>
                                            <button className={style.navItem}><img src={found} alt={'found'}/> Found
                                            </button>
                                        </li>
                                        <li className={style.dropdown}>
                                            <button className={style.dropbtn}><img src={speaker}
                                                                                   alt={'services'}/> Services
                                            </button>
                                            <div className={style.dropdownContent}>
                                                <a href="#">Hotels</a>
                                                <a href="#">Walking</a>
                                                <a href="#">Fostering</a>
                                                <a href="#">VetHelp</a>
                                            </div>
                                        </li>
                                        <li>
                                            <button className={style.navItem}><img src={star}
                                                                                   alt={'favorites'}/> Favorites
                                            </button>
                                        </li>

                                    </div>

                                    <div className={style.flexyProfile}>
                                        <li className={style.navItem}><img className={style.profile} src={photo}
                                                                           alt={'photo'}/> Anna
                                            Smith
                                        </li>
                                        <li className={`mt-5 ${style.navItem}`}><img src={logout}
                                                                                     alt={'logout'}/> Logout
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                        <div className={`col-lg-6 ${style.body}`}>
                            <div className={`row`}>
                                <div className={`ml-5 mt-3 ${style.headerContent}`}>
                                    <span><b>Hotels.</b>  Go to vacations — we’ll take care of your pet!</span>
                                </div>
                                <div className={`ml-3 mr-3 mt-3 ${style.content}`}>
                                    <div className={`d-flex`}>
                                        <img className={`ml-1 mt-1 ${style.smallDog}`} src={smallDog} alt={'smallDog'}/>
                                        <div>
                                            <h3 className={`ml-5 mb-1 mt-1 ${style.user}`}>
                                                John Goodboy
                                            </h3>
                                            <p className={`ml-5 ${style.hours}`}>
                                                2 h
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`col-lg-8 m-auto`}>
                                        <img className={`mb-2 mt-2 ${style.korgy}`} src={korgy} alt='korgy'/>
                                        <text className={style.post}>
                                            Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.
                                            Bright vixens jump; dozy
                                            fowl quack <a href="*">…more</a>
                                        </text>

                                    </div>

                                </div>
                            </div>
                            <div className={`ml-3 mr-3 mt-5 ${style.content}`}>
                                <div className={`d-flex`}>
                                    <img className={`ml-1 mt-1 ${style.smallDog}`} src={smallDog} alt={'smallDog'}/>
                                    <div>
                                        <h3 className={`ml-5 mb-1 mt-1 ${style.user}`}>
                                            John Goodboy
                                        </h3>
                                        <p className={`ml-5 ${style.hours}`}>
                                            2 h
                                        </p>
                                    </div>
                                </div>
                                <div className={`col-lg-8 m-auto`}>
                                    <img className={`mb-2 mt-2 ${style.korgy}`} src={korgy} alt='korgy'/>
                                    <text className={style.post}>
                                        Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.
                                        Bright vixens jump; dozy
                                        fowl quack <a href="*">…more</a>
                                    </text>


                                </div>


                            </div>

                        </div>
                        <div className={`col-lg-3 ${style.sideBar}`}>
                            <div className={`row`}>

                                <img className={`ml-3 mt-3 ${style.a}`} src={a1} alt={'a'}/>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>

    );
};

export default Hotels;