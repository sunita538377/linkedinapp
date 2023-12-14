import React from 'react'
import "./style/sidebar.css"
import { Avatar } from '@mui/material'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src='https://media.istockphoto.com/id/1341408852/video/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke.jpg?s=640x640&k=20&c=v2DQUY8IVbli_6FH_9KAs6YWRXlDdYiBJHfp7JFh7NY=' alt='bacground'/>

            <div className='profile__details'>
              <Avatar/>
              <h4>Sunita Patra</h4>
              <p>Web Developer</p>
            </div>

            <div className='profile__stats'>
              <span>Who viewed your profile</span>
              <span className='stat__number'>20</span>
            </div>
            <div className='profile__stats'>
              <span>Connection<br/><b>Grow Your Network</b></span>
              <span className='stat__number'>150</span>
            </div>
        </div>
        <div className='sidebar__recent'>
          <p>Recent</p>
          <p className='hash'><span>#</span>branding</p>
          <p className='hash'><span>#</span>marketing</p>
          <p className='hash'><span>#</span>webdevelopment</p>
          <p className='hash'><span>#</span>programming</p>
          <p className='hash'><span>#</span>reactjs</p>
          <p className='hash'><span>#</span>reduxtoolkit</p>
        </div>
    </div>
  )
}

export default Sidebar