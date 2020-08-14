import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader />
  }
    return (
      <div>
        {/* {<div className={s.mainImage}>
          <img src="http://www.strongcommunities.org/images/home-img.jpg" alt="does not work" ></img>
        </div>} */}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} alt="not founded"></img><br></br>
          <p>{props.profile.aboutMe}</p>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
  )
}
export default ProfileInfo;