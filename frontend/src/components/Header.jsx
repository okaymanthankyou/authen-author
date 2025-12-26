import React from 'react'
import Buttton from './Buttton'

const Header = () => {
  return (
      <nav className='navbar container align-items-start pt-4 pb-4'>
        <a href="" className='navbar-brand text-light'>AUTHEN-AUTHOR</a>
        <div>
            <Buttton name='Login' class='btn btn-outline-info' />
            &nbsp;
            <Buttton name='Register' class='btn btn-info' />
        </div>
        
      </nav>
  )
}

export default Header