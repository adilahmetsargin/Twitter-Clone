import React from 'react'
import { SearchIcon } from '../icons/Icon'
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
    return (
        <aside  className=" w-96">
                <div className="flex item-center space-x-4 p-3 m-3 bg-gray-extraLightGray rounded-full focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-baseBlue focus-within:text-blue-baseBlue">   
                    <SearchIcon className="h-5 w-5"/>
                    <input type="text" placeholder="Search Twitter" className="focus:outline-none w-full text-sm bg-transparent"></input>
                     </div>
                <div className="mt-5">

                <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'reactjs'
  }}
  options={{
    height: '1000'
  }}
/>
           </div>

        </aside>
    )
}

export default Widgets
