import React from 'react'
import '../css/contacts.css'
const Contact = () => {
  return (
    <>
      <h2 className='contactheading'>Contacts</h2>
      <div className='contactscontainer'>
        <li className='contacts'>shamailabbas61@gmail.com</li>
        <li className='contacts'>+92340263219</li>
        <li className='contacts '>
          <a
            href='https://www.upwork.com/o/profiles/users/~013da0d1e136a43cdd/'
            rel='noreferrer'
            target='_blank'
            className='btnlink'
          >
            Upwork
          </a>
        </li>
        <li className='contacts'>
          <a
            href='https://github.com/ShamailAbbas'
            rel='noreferrer'
            target='_blank'
            className='btnlink'
          >
            Github
          </a>
        </li>
      </div>
    </>
  )
}

export default Contact
