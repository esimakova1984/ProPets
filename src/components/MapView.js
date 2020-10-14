import React from 'react';
import style from "../css_modules/lostPageGen.module.css";
import {mapview, lostPageGen} from "../utils/Constants";
import {SWContext} from "../utils/Context";

const MapView = () => {
    return (
        <SWContext.Consumer>
            {value =>(<div className={`container-fluid col-lg-12 m-auto  ${style.container}`}>
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
                        <button onClick={() => value.changePage(lostPageGen)} className={`${style.mapView}`}>List view
                        </button>
                    </div>
                </div>
            </div>
        </div>
            )}
        </SWContext.Consumer>);
};

export default MapView;