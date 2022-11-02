import { useContext } from "react";
import "./style.scss"
import followers from "../../followers.json"

import React from 'react';

const index = () => {
    return (
    
            <>
                               <div className="follow">
                {
                followers.map(item=>{
                    return(
 
                    <div className="flex-content">
                        <div className="first-content">
                            <img src={item.avatar_url} alt="user" className='rounded-circle' />

                            <div className="second-content">
                                <h3>Humoyun <span>{item.login}</span></h3>
                                <div className="bio">no bio yet</div>
                                <div className="location"><i class="bi bi-geo-alt-fill"></i>Tashkent</div>
                            </div>

                        </div>
                        <div className="btn-content"><button className="btn content-btn">Unfollow</button></div>
                    </div>
                
                    )
                })
                }
                </div>
            </>
        
    );
};

export default index;