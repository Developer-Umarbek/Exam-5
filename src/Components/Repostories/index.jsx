import React from 'react';
import './style.scss'
import repo from "../../repo.json"


const index = () => {
  return (
    <>
      <div className="all3 container">
        <div className="inputs">
          <input type="text" className='search2 ' placeholder='Find repostories ....' />
          {/* <select id="s1">
                    <option value="type" disabled>Type</option>
                    <option value="Vue">Js</option>
                   </select>
                   <select id='s2'>
                    <option value="sort" disabled>Sort</option>
                    <option value="srt">srt</option>
                   </select>
                   <select s3>
                    <option value="sort" disabled>Sort</option>
                    <option value="srt">srt</option>
                   </select> */}
          <div className="options">
            <div class="btn-group">
              <button
                type="button"
                class="btn  dropdown-toggle"
                data-mdb-toggle="dropdown"
                data-mdb-display="static"
                aria-expanded="false"
              >
                Type
              </button>
              <ul class="dropdown-menu dropdown-menu-lg-end">
                <li className='d1'><button className='dropdown-item d-flex ' disabled><p> Slelect types</p> <i class="fa-solid fa-xmark"></i></button> </li><hr />
                <li className='d1'><button class="dropdown-item" type="button">Public</button></li>
                <li className='d1'><button class="dropdown-item" type="button">Private action</button></li>
                <li className='d1'><button class="dropdown-item" type="button">Sources</button></li>
                <li className='d1'><button class="dropdown-item" type="button">Forks</button></li>
                <li className='d1'><button class="dropdown-item" type="button">Archived</button></li>
                <li className='d1'><button class="dropdown-item" type="button">Mirrors</button></li>
                <li className='d1'><button class="dropdown-item" type="button">Templates</button></li>
              </ul>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn  dropdown-toggle"
                data-mdb-toggle="dropdown"
                data-mdb-display="static"
                aria-expanded="false"
              >
                Lang
              </button>
              <ul class="dropdown-menu dropdown-menu-lg-end">
                <li className='d1'><button className='dropdown-item d-flex ' disabled><p> Slelect types</p> <i class="fa-solid fa-xmark"></i></button> </li> <hr />
                <li><button class="dropdown-item" type="button">Action</button></li>
                <li><button class="dropdown-item" type="button">Another action</button></li>
                <li><button class="dropdown-item" type="button">Something else here</button></li>
              </ul>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn  dropdown-toggle"
                data-mdb-toggle="dropdown"
                data-mdb-display="static"
                aria-expanded="false"
              >
                Sort
              </button>
              <ul class="dropdown-menu dropdown-menu-lg-end">
                <li className='d1'><button className='dropdown-item d-flex ' disabled><p> Slelect types</p> <i class="fa-solid fa-xmark"></i></button> </li><hr />
                <li><button class="dropdown-item" type="button">Action</button></li>
                <li><button class="dropdown-item" type="button">Another action</button></li>
                <li><button class="dropdown-item" type="button">Something else here</button></li>
              </ul>
            </div>
          </div>
          <button>New</button>
        </div>
       
                    {
                      repo.map(item =>{
                        return(
                        <div className="cards_rep">
                        <div className="card_rep">
                          <div className="tex_sec1">
                            <h4><a href={item.html_url} target={'_blank'}>{item.name}</a> <span className='btn2'>public</span></h4>
                            <div className="btnss">
                              <button className="star2 btn">
                                <i class="fa-regular fa-star text-light"></i><p className='text-light'>Star</p>
                              </button>
                              <button className='btn text-light'><i class="fa-solid fa-caret-down"></i></button>
                            </div>
                          </div>
                          <p className='fs-6'>{item.description}</p>
                          <div className="time">
                            <p>{item.language}</p>
                            <p>Last update {item.updated_at.substring(8,10)}{item.updated_at.substring(4,7)}-{item.updated_at.substring(0,4)}</p>
                          </div>
                        </div>
                      </div>
                        )
                      })


                    }

      </div>
    </>
  );
};

export default index;