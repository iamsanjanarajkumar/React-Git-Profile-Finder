import React from 'react';
import {Link} from 'react-router-dom'

function ProfileComponent(props){
    return(
        <div className="profile">
            <div className="card">
                <div className="card-header">
                    <img src={props.avatar_url} alt="noImage" className="card-img" />
                </div>
                <div className="card-body">
                    <h4 className="text-center">{props.name}</h4>
                    <Link to={`${props.html_url}`} target='_blank' className='btn-link'>View My Profile</Link>
                    <div className="profile-info">
                        <ul>
                            <li>
                                <strong>Public Repo's</strong>
                                <span className='f-right'>{props.public_repos}</span>
                            </li>
                            <li>
                                <strong>Followers:</strong>
                                <span className="f-right">{props.followers}</span>
                            </li>
                            <li>
                                <strong>Following:</strong>
                                <span className="f-right">{props.following}</span>
                            </li>
                            <li>
                                <strong>Location:</strong>
                                <span className="f-right">{props.location}</span>
                            </li>
                            <li>
                                <strong>Created on:</strong>
                                <span className="f-right">{new Date(props.created_at).toLocaleString()}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileComponent