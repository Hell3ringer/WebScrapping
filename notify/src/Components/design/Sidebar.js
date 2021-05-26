import React, { Component } from 'react'
import {SidebarData} from './SidebarData'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Sidebar extends Component {
  render() {
    return (
      <div>
        <button class="btn bg-secondary bd-sidebar-toggle d-md-none py-0 px-1 ms-3 order-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bd-docs-nav" aria-controls="bd-docs-nav" aria-expanded="false" aria-label="Toggle docs navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi bi-expand" fill="currentColor" viewBox="0 0 16 16">
  <title>Expand</title>
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"></path>
</svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi bi-collapse" fill="currentColor" viewBox="0 0 16 16">
  <title>Collapse</title>
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"></path>
</svg>

    </button>
          <div className="sidebar navbar-expand-lg" id='sidebarContainer'>
            <nav className='collapse show' >
            <ul className='sidebarList'>
            {SidebarData.map((val,key) => {
              return(
                <div>
                <li key={key}  
                id={window.location.pathname == val.link ? "active" : ""}
                className='rowList' onClick={() => window.location.pathname = val.link}><div id='icon'>{val.icon}</div>
                <div id='Title'>{val.title}</div>

                </li>
                </div>
              )

            })}
            </ul>
            <h1 id='sidebarText'>Notifi</h1>
            </nav>
          </div>
        </div>
      
    )
  }
}

export default Sidebar
