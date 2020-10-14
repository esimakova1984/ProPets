import React from 'react';
import ooo from "../Images/ooo.png";
import Navigation from "./Navigation"
import Lost from "./Lost";
import style from "../css_modules/header.module.css";
import addSign from "../Images/addSighn.png";
import logo from "../Images/greenPropetsLogo.png"
import plus from "../Images/plus.jpg"
import {postPage} from "../utils/Constants";
import {SWContext} from "../utils/Context";
import Main from "./Main";


const Header = () => {
    return (
        <SWContext.Consumer>
            {value => (<div className={`container-fluid ${style.header}`}>
                <div className='row'>
                            <div className="col-lg-3 pl-xl-5 ml-xl-5 pl-lg-3 pb-2 pt-2">

                               <img className={style.logo} src={logo}/>
                            </div>
                            <div className="col-3 ml-auto">
                                <img onClick={() => value.changePage(postPage)}
                                     className={`d-sm-block d-lg-none mt-auto ${style.add} `} src={plus} alt='plus'/>
                                <button onClick={() => value.changePage(postPage)}
                                        className={` d-none d-lg-block mt-3  ${style.addNew}`}>+ &nbsp; Add new
                                </button>
                            </div>
                </div>
            </div>)}
        </SWContext.Consumer>
    );
};

export default Header;