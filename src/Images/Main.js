import React from 'react';
import Home from "./Home";
import Lost from "./Lost";
import Found from "./Found";
import Favorites from "./Favorites"
import Services from "./Services";
import {homePage, postpreview, postPage, lostPage, lostPageGen, mapview, signin, signup, profile, activities, foundPage, favorites, services} from "../utils/Constants";
import {SWContext} from "../utils/Context";
import style from "../css_modules/main.module.css";
import PostPage from "./PostPage";
import Signup from "./Signup";
import PostPreview from "./PostPreview";
import Profile from "./Profile";
import Activities from "./Activities";
import LostPageGen from "./LostPageGen";
import MapView from "./MapView";
import Signin from "./Signin";

const Main = () => {
    return (
        <SWContext.Consumer>
            {value => {
                switch (value.page) {
                    case signup:
                        return <Signup/>
                    case signin:
                        return <Signin/>
                    case lostPage:
                        return <Lost/>;
                    case postPage:
                        return <PostPage/>;
                    case postpreview :
                        return <PostPreview/>
                    case foundPage:
                        return <Found/>;
                    case favorites:
                        return <Favorites/>;
                    case services:
                        return <Services/>;
                    case profile:{
                        return <Profile/>
                    }
                    case lostPageGen:
                        return <LostPageGen/>
                    case activities:{
                        return <Activities/>
                    }
                    case mapview:{
                        return <MapView/>
                    }
                    default:
                        return <Home/>;
                }
            }}
        </SWContext.Consumer>

    );
};

export default Main;
