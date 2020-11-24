import React from 'react'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import '../component/Header.css';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{user}] = useStateValue()
    return (
        <div className ='header'>
            <div className ='header_left'>
                <Avatar
                    className ='header_avatar'
                    alt={user?.displayName}
                    src={user?.photoURL}

            
             />
                 <AccessTimeIcon />
            </div>
            <div className ="header_search">
                <SearchIcon />
                <input placeholder='Search Clever Programes' />
            </div>
            <div className='header_right'>
                <HelpOutlineIcon />
                {/* {help icon} */}
            </div>
        </div>
    )
}

export default Header
