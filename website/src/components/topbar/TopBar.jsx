import React from 'react'
import './TopBar.scss'
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillChatLeftTextFill } from 'react-icons/bs';

export default function TopBar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>LOGO</a>
                    <div className="itemContainer">
                        <BsFillPersonFill className='icon' />
                        <span>+64 000 0000</span>
                    </div>
                    <div className="itemContainer">
                        <BsFillChatLeftTextFill className='icon' />
                        <span>email@email.com</span>
                    </div>
                </div>

                <div className="right">

                </div>
            </div>

        </div >
    )
}
