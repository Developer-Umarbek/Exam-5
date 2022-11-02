import React from 'react';
import "./style.scss"

const index = () => {
    return (
        <>
            <div className="flex-box">
                <div className="flex-item">
                    <ul className="public">
                        <li><a href="#" className='flex-a'>First repo</a></li>
                        <li  className='br'>Public</li>
                    </ul>
                    <p>html , css</p>
                    <i className='fs-7'>SCSS</i><i class="bi bi-star">1</i>
                </div>

                <div className="flex-item">
                    <ul className="public">
                        <li><a href="#" className='flex-a'>First repo</a></li>
                        <li  className='br'>Public</li>
                    </ul>
                    <p>html , css</p>
                  <i className='fs-7'>CSS</i>  <i class="bi bi-star">1</i>
                </div>

                <div className="flex-item">
                    <ul className="public">
                        <li><a href="#" className='flex-a'>First repo</a></li>
                        <li className='br'>Public</li>
                    </ul>
                    <p>html , css</p>
                   <i  className='fs-7'>JavaScript</i> <i class="bi bi-star">1</i>
                </div>

                <div className="flex-item">
                    <ul className="public">
                        <li><a href="#" className='flex-a'>First repo</a></li>
                        <li className='br'>Public</li>

                    </ul>
                    <p>html , css</p>
                    <i className='fs-7'>React js</i><i class="bi bi-star">1</i>
                </div>

                <div className="flex-item">
                    <ul className="public">
                        <li><a href="#" className='flex-a'>First repo</a></li>
                        <li className='br'>Public</li>

                    </ul>
                    <p>html , css</p>
                   <i>html</i> <i class="bi bi-star">1</i>
                </div>
                
                <div className="flex-item">
                    <ul className="public">
                        <li><a href="#" className='flex-a'>First repo</a></li>
                        <li className='br'>Public</li>

                    </ul>
                    <p>html , css</p>
                    <i class="bi bi-star">1</i>
                </div>


            </div>

        </>
    );
};

export default index;