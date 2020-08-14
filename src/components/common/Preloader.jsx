import React from 'react';
import preloader from '../../assets/images/preloader.gif';
import s from './preloader.module.css';

let Preloader = (props) => {
    return <div>
        <img src = {preloader} 
        className={s.preloaderimg} alt="not founded"/>
    </div>
}

export default Preloader;