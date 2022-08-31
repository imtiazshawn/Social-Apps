import React from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const Post = ({data}) => {
  return (
    <div className="Post">

            {/* Post Images */}
        <img src={data.img} alt="" />


            {/* Post Activity */}
        <div className="postReact">
            <img src={data.liked?Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>


            {/* Description */}

        <span style={{color: 'var(--gray)', fontSize: '12px'}}>{data.likes} Likes</span>


            {/* Details */}

        <div className="details">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>

    </div>
  )
}

export default Post;