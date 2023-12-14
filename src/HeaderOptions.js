import { Avatar } from '@mui/material'
import React from 'react'
import "./style/header.css"

const HeaderOptions = ({Icon,title,avatar}) => {
  return (
    <div className='header__options'>
      {
       Icon && <Icon></Icon>
      }
      {
        avatar && <Avatar name={avatar}/>
      }
        <span>{title}</span>
    </div>
  )
}

export default HeaderOptions