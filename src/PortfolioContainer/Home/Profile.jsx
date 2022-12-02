import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <a href="#">
                        <i className='fa fa-linked-square'> <AiFillLinkedin /> </i>

                    </a>
                    <a href="#">
                        <i className='fa fa-google-plus-square'></i>

                    </a>
                    <a href="#">
                        <i className='fa fa-instagram'></i>

                    </a>
                    <a href="#">
                        <i className='fa fa-youtube-square'></i>

                    </a>
                    <a href="#">
                        <i className='fa fa-twitter'></i>

                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
