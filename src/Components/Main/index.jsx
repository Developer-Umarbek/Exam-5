import React from 'react';
import "./style.scss"
import { NavLink } from 'react-router-dom';

const index = () => {
    return (
        <>
            <main className="main">

                <div className="main__header">

                    <div className="main__header__text">

                        <ul className="main__header__text__ul">
                            <NavLink to={"/"}><li className="main__header__text__ul__li"><a href="#" className="main__header__text__ul__li link"><i class="bi bi-book"></i> Overview</a></li></NavLink>
                            <NavLink to={"repo"}> <li className="main__header__text__ul__li"><a href="#" className="main__header__text__ul__li link"> <i className="fa-solid fa-book"></i> Repositories</a></li></NavLink>
                            <li className="main__header__text__ul__li"><a href="#" className="main__header__text__ul__li link"><i class="bi bi-kanban-fill"></i> Projects</a></li>
                            <li className="main__header__text__ul__li"><a href="#" className="main__header__text__ul__li link"><i class="bi bi-box"></i> Packeges</a></li>
                            <li className="main__header__text__ul__li"><a href="#" className="main__header__text__ul__li link"><i class="bi bi-star"></i> Stars</a></li>
                        </ul>

                    </div>

                </div>
            </main>
        </>
    );
};

export default index;