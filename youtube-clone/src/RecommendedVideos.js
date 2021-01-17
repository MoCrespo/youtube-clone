import React from 'react'
import VideoCard from './VideoCard'
import './RecommendedVideos.css'
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title="أبوإسماعيل يكشف حقيقة موسوعة جينيس ويحطم رقم قياسي جديد" 
                    views="71K Views"
                    timestamp="day ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnh8pkGyxnJoT5JMvdMYGBGAu4RlVaThMNq5Say44A=s68-c-k-c0x00ffffff-no-rj"
                    channel="MahmoudIsmailTV"
                    image="https://i.ytimg.com/vi/MhYnzOce-Co/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCFLj9r_vbW6MIJR8wZ9Zu7j0x5dg"
                 /> 
                 <VideoCard 
                    title="الحرب بين اللغويين وصبيان الحرامر - معلومات لاول مرة .." 
                    views="370K Views"
                    timestamp="one year ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngx6c_WHq7I1uO9LaYzhsYZBu4_CoKj6vxCefym=s68-c-k-c0x00ffffff-no-rj"
                    channel="ZAmericanEnglish"
                    image="https://i.ytimg.com/vi/y2lzJRA-fPI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBajhBj7KKRVf2QeO-g9P5hhb3-Vw"
                 /> 
                 <VideoCard 
                    title="{الحراق}(44)اه ياقفا يا قفا!" 
                    views="131K Views"
                    timestamp="day ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnhh2GAkVnArn1V91NBTHgzL4Uw5RCO9WT1ZOIUW=s68-c-k-c0x00ffffff-no-rj"
                    channel="أحمد بحيري"
                    image="https://i.ytimg.com/vi/MY74g5ZRCC0/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDcfyk1wxGsdPVZnfXrwPpHFzFdjA"
                 /> 
                 <VideoCard 
                    title="عيوب النرويج بعد 3 سنين عايش فيها" 
                    views="70K Views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwng512iRGwq4W9omkZPmb4ErSEk0sVH50mMdtuoF_gI=s68-c-k-c0x00ffffff-no-rj"
                    channel="بيسوهات Besohat"
                    image="https://i.ytimg.com/vi/9d05ES7yZ-A/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCBkeI3fUfyAWO-onll8YlQoLtM-Q"
                 /> 
            </div>
        </div>
    )
}

export default RecommendedVideos
