import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <img src="https://avatarko.ru/img/kartinka/13/ochki_panda_12677.jpg" alt="does not work"></img>
    {props.message};
    <div>
      <span>Like</span> {props.likesCount}
    </div>
  </div>
}

export default Post;