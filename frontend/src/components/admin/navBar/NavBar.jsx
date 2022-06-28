import React from 'react'
import "./NavBar.scss"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

function NavBar() {
  return (
<div className="navbarr">
  <div className="wapper">
    <div className="search">
      <input type="text" placeholder='search...' />
      <SearchSharpIcon className='icon'/>
    </div>
    <div className="items">
      <div className="item">
    <LanguageSharpIcon  className='icon'/>
    English
      </div>
      <div className="item">
    <DarkModeOutlinedIcon  className='icon'/>
      </div>
      <div className="item">
    <FullscreenOutlinedIcon  className='icon'/>
      </div>
      <div className="item">
    <NotificationsNoneOutlinedIcon  className='icon'/>
    <div className="counter">1</div>

      </div>
      <div className="item">
    <ChatBubbleOutlineOutlinedIcon  className='icon'/>
    <div className="counter">1</div>
      </div>
      <div className="item">
    <ListOutlinedIcon  className='icon'/>
      </div>
      <div className="item">
    <img src='https://scontent.fcok8-1.fna.fbcdn.net/v/t1.6435-9/151001246_1538127966577548_117648261850077254_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Y_eBaDa6f9IAX8VnreL&_nc_ht=scontent.fcok8-1.fna&oh=00_AT8fc9WR-XOFQWoD7_B5r15TkqfjbBeV1D6BaVZ8V4Ki9g&oe=62DD0A9E'
    className='avatar'/>
      </div> 
    </div>
  </div>
</div>
  )
}

export default NavBar