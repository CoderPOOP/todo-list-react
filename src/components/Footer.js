import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='mt-3'>
      <ul className="nav justify-content-center position-fixed left-0 bottom-0 w-100 bg-dark">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Todo List</a>
        </li>
      </ul>
      <hr />
    </div>
    </>
  )
}