import React from 'react';
import "./Header.css";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';
import Avatar from '@mui/material/Avatar';

function Header() {
    const [{user}] = useStateValue();
 
  return (
    <div className="header">
      <div className="header__left">
          <Avatar
            className="header__avatar"
            alt={user?.displayName}
            src={user?.photoURL}
          />
          <AccessTimeFilledIcon/>
      </div>
      <div className="header__search">
          <SearchIcon />
          <input placeholder="Search"></input>
      </div>
      <div className="header__right">
      <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header