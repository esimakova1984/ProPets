import React, {Component} from 'react';
import {homePage, lostPage, foundPage, favorites, activities, signin, signup, services, profile} from "../utils/Constants";
import {SWContext} from "../utils/Context";
import home from "../Images/home.png"
import search from "../Images/search.png"
import found from "../Images/found.png"
import speaker from "../Images/speaker.png"
import star from "../Images/star.jpg"
import photo from "../Images/profile.png"
import logout from "../Images/logout.png"
import style from "../css_modules/navigation.module.css";

class Navigation extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
        document.head.appendChild(script);
        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.async = true;
        script2.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
        document.head.appendChild(script2);
        document.body.appendChild(script2);


    }

    render() {

        return (
            <SWContext.Consumer>
                {value => (<nav className={` navbar navbar-expand-lg  navbar-dark fixed-left  ${style.navigation}`}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar">
                            <div className={`${style.flexy}`}>
                                <li className="nav-item" onClick={() => value.changePage(homePage)}><img src={home} alt={'home'}/> Home</li>
                                <li className="nav-item" onClick={() => value.changePage(lostPage)}><img src={search} alt={'lost'}/> Lost
                                </li>
                                <li className="nav-item"  onClick={() => value.changePage(foundPage)}><img src={found} alt={'found'}/> Found
                                </li>
                                <li className="nav-item"  onClick={() => value.changePage(favorites)}><img src={star}
                                                                                     alt={'favorites'}/> Favorites
                                </li>
                                <li className="nav-item" onClick={() => value.changePage(services)}><img src={speaker}
                                                                                    alt={'services'}/> Services
                                </li>
                            </div>
                            <div className={style.flexyProfile}>
                                <li className="nav-item" onClick={() => value.changePage(profile)} ><img className={style.profile} src={photo} alt={'photo'}/> Anna Smith</li>
                                <li className="nav-item" onClick={() => value.changePage(signin)} ><img src={logout} alt={'logout'}/> Logout</li>
                            </div>
                        </ul>
                    </div>
                </nav>)}
            </SWContext.Consumer>
        );


    }
}

export default Navigation;