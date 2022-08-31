import React from 'react';
import './ProfileCard.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/imtiazshawn.jfif';
import {Link} from 'react-router-dom';

const ProfileCard = () => {

    const ProfilePage = true;

  return (
    <div className="ProfileCard">


            {/* Profile Images */}
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>


            {/* Profile Name and Bio */}

        <div className="ProfileName">
          <span>Imtiaz Shawn</span>
          <span>React JS Developer</span>
        </div>



            {/* Following Status*/}
        
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>96151</span>
              <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>6</span>
              <span>Followings</span>
            </div>

            {ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
          {/* Profile Link */}
          
          <Link to="/profile" className='link-pro'><span className='profile-link'>My Profile</span></Link>
            
            
        </div>
    </div>
  )
}

export default ProfileCard;