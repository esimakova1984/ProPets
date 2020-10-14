import React from 'react';
import style from "../css_modules/postpage.module.css";
import smallDog from "../Images/smalldog.png";
import profile from "../Images/profile.png"
import chewbacca from "../Images/friend3.jpg"
import lea from "../Images/friend6.jpg"
import addSign from "../Images/addSighn.png";
import download from "../Images/download.png";
import lapa from "../Images/lapa.png";
import {SWContext} from "../utils/Context";
import {postPage, postpreview} from "../utils/Constants";

const PostPage = () => {
    return (
        <SWContext.Consumer>
            {value =>(<div className={`container-fluid col-10 m-auto  ${style.container}`}>
            <div className='row'>
                <div className={`${style.header}`}>
                    <span><b>Your new Post!</b> Simply text, add photos and publish.</span>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-2'>
                    <div className={style.title}><h2>Text:</h2></div>
                    <div className={style.hint}><p>Up to 1500 char:</p></div>
                </div>
                <div className="col-lg-10">
                    <div className={style.maintext}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will
                            be distracted by the readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                            to using ‘Content here, content here’, making it look like readable English. Many desktop
                            publishing packages and web page editors now use Lorem Ipsum as their default model text,
                            and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various
                            versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                            humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It
                            has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years
                            old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
                            one of the more obscure Latin words.
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-2 align-content-center'>
                    <div className={style.title}><h2>Photo:</h2></div>
                    <div className={style.hint}><p>Up to 4 images:</p></div>
                </div>
                <div className={`col-lg-5 d-flex justify-content-center  ${style.photos}`}>
                    <div>
                        <img className={`${style.photoMain}`} src={profile}/>
                        <div className="row w-100 ml-auto align-content-around justify-content-center">
                            <img className={`${style.photo}`} src={chewbacca}/>
                            <img className={`${style.photo}`} src={lea}/>
                            <img className={`${style.photo}`} src={addSign}/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='row  align-content-around align-items-center justify-content-center'>
                            <div className='d-none d-lg-block'>
                                <img src={download} className={`ml-4 ${style.download}`} alt="download"/><br/>
                                <div className={` ${style.drug_drop}`}>Drag and drop photos or
                                </div>
                            </div>
                        </div>
                        <button className={`mr-lg-5 ${style.browser}`}>Browse</button>
                    </div>
                </div>
                <div className=' col-lg-2 row ml-auto mr-auto'>
                    <div className={`d-flex align items center ${style.blockPhoto}`}>
                        <div>
                            <div className={`d-flex  justify-content-around `}>
                                <text className={style.images}>image1.jpg</text>
                                <text className={style.imagesX}>x</text>
                            </div>
                            <div className={`d-flex  justify-content-around `}>
                                <text className={style.images}>image1.jpg</text>
                                <text className={style.imagesX}>x</text>
                            </div>
                            <div className={`d-flex  justify-content-around `}>
                                <text className={style.images}>image1.jpg</text>
                                <text className={style.imagesX}>x</text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex justify-content-around">
                            <img className={`d-none d-lg-block  ${style.smallDog}`} src={smallDog} alt='smallDog'/>
                            <div className='mr-5'>
                                <h3  className={`d-none d-lg-block  ${style.user}`}>
                                    John Goodboy
                                </h3>
                                <p  className={`d-none d-lg-block  {style.hours}`}>
                                    2 h
                                </p>
                            </div>

                            <button onClick={() => value.changePage(postpreview)} className={`ml-4 ${style.submit}`}><span><img
                                                                             src={lapa}
                                                                             alt={'lapa'}/> Publish</span></button>

                    </div>
                </div>
            </div>
        </div>)}
        </SWContext.Consumer>
    );
};

export default PostPage;