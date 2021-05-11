/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Sidelink = ({Icon, name,onMenuItemClick, active}) => {
    const isActive = active===name
    return (
      <li className="group" onClick={()=>onMenuItemClick(name)}>
          <a href={name.toLowerCase()} 
          className="block cursor-pointer text-xl mb-2 pointer-events-none">
              <div className="inline-block">
              <div className={`flex items-center group-hover:bg-blue-lightBlue rounded-full group-hover:text-blue-baseBlue pl-3 py-3
                          ${isActive ? 'text-blue-baseBlue' : ''}`}>
                      <Icon /> 
                  <span className="ml-4 font-bold">
                      {name}
                  </span>
              </div>
              </div>
          </a>
      </li>
    )
}

export default Sidelink
