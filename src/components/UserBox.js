import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-blue-lightBlue cursor-pointer rounded-full py-2 px-4">
          <img src="https://pbs.twimg.com/profile_images/1343621698030071813/f8O81qL6_bigger.jpg" alt="ProfilePic" className="w-11 h-11 rounded-full" />
          <div className="flex flex-col">
              <span className="text-black text-md font-bold">AdilAhmetSargın</span>
              <span className="text-sm text-gray-darkGray">@adilahmet</span>
          </div>
          <div className="flex space-x-1">
              <div className="h-1 w-1 rounded-full bg-black"/>
              <div className="h-1 w-1 rounded-full bg-black"/>
              <div className="h-1 w-1 rounded-full bg-black"/>

          </div>
        </div>
    )
}

export default UserBox
