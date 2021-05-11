import React, {useState} from "react";
import Sidelink from "../components/Sidelink";
import UserBox from "../components/UserBox";
import {
  BookmarksIcon,
  EmojiIcon,
  ExploreIcon,
  GIFIcon,
  HomeIcon,
  ImageIcon,
  LikeIcon,
  ListsIcon,
  LogoIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  PollIcon,
  PopulerIcon,
  ProfileIcon,
  ReplyIcon,
  ReTweetIcon,
  ScheduleIcon,
  SearchIcon,
  ShareIcon,
} from "../icons/Icon";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Search",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];


const Sidebar = () => {
  const [active, setActive] = useState("Home")

  const handleOnMenuItemClick =(name)=>{
setActive(name)
  }

  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-2">
      {/* 
             <HomeIcon />
             <ExploreIcon />
             <NotificationIcon />
             <MessagesIcon />
             <ListsIcon />
             <BookmarksIcon />
             <ProfileIcon />
             <MoreIcon />
             <PopulerIcon className="w-7 h-7" />
             <ImageIcon className="w-7 h-7" />
             <GIFIcon className="w-7 h-7" />
             <PollIcon className="w-7 h-7" />
             <EmojiIcon  className="w-7 h-7" />
             <ScheduleIcon  className="w-7 h-7"/>
             <ReplyIcon className="w-7 h-7" />
             <ReTweetIcon className="w-7 h-7" />
             <LikeIcon className="w-7 h-7" />
             <ShareIcon className="w-7 h-7" />
             <SearchIcon className="w-7 h-7" /> */}
      <div>
        <div className="mt-1 mb-4 ml-1 flex items-center w-12 h-12 rounded-full justify-center hover:bg-gray-lightGray">
        <LogoIcon />
        </div>
        <nav className="mb-4">
          <ul>
           {sideLinks.map(({name, icon})=>(
             <Sidelink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleOnMenuItemClick} />
           ))}
          </ul>
        </nav>
          <button className="bg-blue-baseBlue hover:bg-blue-darkBlue text-white shadow-lg rounded-full py-3 px-8 w-11/12">Tweet</button>
      </div>
<UserBox />
    </div>
  );
};

export default Sidebar;
