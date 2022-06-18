import React from 'react'

const MainHeader = () => {
    return (
        <header className=''>
       
        <nav className=''>
            <ul className='mt-8'>
                <li onClick={()=> scrollToSection(home)} className="link">
                   Home
                </li>
                <li onClick={()=> scrollToSection(form)} className=''>
                   Form
                </li>
                <li conClick={()=> scrollToSection(transaction)} lassName=''>
                    Transaction
                </li>
            </ul>
        </nav>
        </header>
      )
}

export default MainHeader