import React from 'react';
import { NavLink } from 'react-router-dom';
import user from "../../user.json"

const index = () => {


    return (
        <>
            <div className="main__left">
               <div className="flex-url">
               <img src="https://avatars.githubusercontent.com/u/109433910?v=4" className='rounded-circle' alt="user" />
                <div className="flex-h">
                    <h2>{user.name}</h2>
                    <h4>{user.login}</h4>
                </div>
               </div>
                <p>{user.bio}</p>
                <button className="btn">Edit Profil</button>
                <ul className='main-ul'>
                    <NavLink to={"follows"}>     <li style={{ color: "grey" }}><i class="bi bi-people-fill"></i><span>{user.followers}</span> follower</li></NavLink> <NavLink to={"following"}> <li style={{ color: "grey" }}><span className='ps-2'>·  {user.following}</span> following</li></NavLink></ul>
                <ul className='main-ul2'><li><i class="bi bi-geo-alt-fill"></i> {user.location}, </li>  </ul>
            </div>
        </>
    );
};

export default index;