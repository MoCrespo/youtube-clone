import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import TuneIcon from '@material-ui/icons/Tune';
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AAUvwnhh2GAkVnArn1V91NBTHgzL4Uw5RCO9WT1ZOIUW=s176-c-k-c0x00ffffff-no-rj-mo" 
                channel="أحمد بحيري"
                verified 
                subs="1.45M"
                noOfVideos={1.399}
                description="يهمني اﻹنسان..عشان كده رسالتي.. اساعد اني أنور ولو نقطة في عقلك.. من خلال الكلمة .. أو الصورة .. أو الصوت."
            />
            <hr />
            <VideoRow
            title="{عرفوه بالعلم}(26) اﻹنسان أصله بلحة!"
            subs="1.4M"
            views="57K"
            image="https://i.ytimg.com/vi/ySbLmU0TJPQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBnhcbWqV60PCnGDgbaR7LiROd76A"
            channel="أحمد بحيري"
            timestamp="17 Hours ago "
            description="هل التطور نظرية؟ ولا حقيقة علمية؟ ولا الاثنين؟ الخناقة اللي مابتخلصش ومش هاتخلص فيما يبدو.. مابين ناس بيقولوا ان التطور ده..."
            />

<VideoRow
            title="{عرفوه بالعلم}(26) اﻹنسان أصله بلحة!"
            subs="1.4M"
            views="57K"
            image="https://i.ytimg.com/vi/ySbLmU0TJPQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBnhcbWqV60PCnGDgbaR7LiROd76A"
            channel="أحمد بحيري"
            timestamp="17 Hours ago "
            description="هل التطور نظرية؟ ولا حقيقة علمية؟ ولا الاثنين؟ الخناقة اللي مابتخلصش ومش هاتخلص فيما يبدو.. مابين ناس بيقولوا ان التطور ده..."
            />
            <VideoRow
            title="{عرفوه بالعلم}(26) اﻹنسان أصله بلحة!"
            subs="1.4M"
            views="57K"
            image="https://i.ytimg.com/vi/ySbLmU0TJPQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBnhcbWqV60PCnGDgbaR7LiROd76A"
            channel="أحمد بحيري"
            timestamp="17 Hours ago "
            description="هل التطور نظرية؟ ولا حقيقة علمية؟ ولا الاثنين؟ الخناقة اللي مابتخلصش ومش هاتخلص فيما يبدو.. مابين ناس بيقولوا ان التطور ده..."
            />

<VideoRow
            title="{عرفوه بالعلم}(26) اﻹنسان أصله بلحة!"
            subs="1.4M"
            views="57K"
            image="https://i.ytimg.com/vi/ySbLmU0TJPQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBnhcbWqV60PCnGDgbaR7LiROd76A"
            channel="أحمد بحيري"
            timestamp="17 Hours ago "
            description="هل التطور نظرية؟ ولا حقيقة علمية؟ ولا الاثنين؟ الخناقة اللي مابتخلصش ومش هاتخلص فيما يبدو.. مابين ناس بيقولوا ان التطور ده..."
            />
        </div>
    )
}

export default SearchPage
