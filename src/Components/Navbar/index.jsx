import React ,{useState}from 'react';
import "./style.scss"


const index = () => {
    let [val,setVal]=useState('')
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-white">

                <div className="container-fluid body">

                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars text-light" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <a className="navbar-brand mt-2 mt-lg-0" href="../index.html">
                            <i class="fa-brands fa-github"></i>
                        </a>


                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item  search">
                            <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    console.log(val);
                                    window.location.href="https://github.com/search?q=user%3ADeveloper-Umarbek+${val}"
                                }}>
                                <input type="text" placeholder="Search or jump to…" 
                                onChange={(e)=>{
                                    setVal(e.target.value)
                                }}                               
                                />
                                </form>
                                <button>/</button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pull request</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Issues</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Marketplace</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Explore</a>
                            </li>
                        </ul>

                    </div>


                    <div className="d-flex align-items-center">

                        <a className="link-secondary me-3" href="#">
                            <i class="far fa-bell"></i>
                        </a>

                        <div className="dropdown">
                            <a className="link-secondary me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-plus"></i>
                                <i class="fas fa-caret-down p-1"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end drop-color" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a className="dropdown-item" href="#">New repository</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Import repository</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">New gist</a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">New project</a>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src="https://avatars.githubusercontent.com/u/109433910?s=40&v=4" className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" /><i class="fas fa-caret-down p-1"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end drop-color" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </nav>

        </>
    );
};

export default index;