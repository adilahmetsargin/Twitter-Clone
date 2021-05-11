import React, {useEffect,useState} from 'react'
import db from '../firebase'
import { PopulerIcon } from '../icons/Icon'
import TweetBox from '../components/TweetBox'
import Divider from '../components/Divider'
import FeedList from '../components/FeedList'
const Content = () => {
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        db.collection('feed').orderBy('timestamp', 'desc').onSnapshot(snapshot => setTweets(snapshot.docs.map(doc => doc.data())))
    }, [])

    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-extraLightGray">
               <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b bg-white border-gray-extraLightGray">
                   <span className=" font-bold text-xl">Home</span>
                   <PopulerIcon className="w-7 h-7 text-blue-baseBlue" />
               </header>
               <div className="flex px-4 py-3 space-x-2 items-center">
               <img src="https://pbs.twimg.com/profile_images/1343621698030071813/f8O81qL6_bigger.jpg" alt="ProfilePic" className="w-11 h-11 rounded-full" />
            <TweetBox />                       
               </div>
               <Divider />
               <FeedList tweets={tweets} />
        </main>
    )
}

export default Content
