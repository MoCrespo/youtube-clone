import React from 'react'
import {Avatar } from '@material-ui/core/'
import "./ChannelRow.css"
import CheckCircleIcon  from '@material-ui/icons/CheckCircle';
function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className='channelRow__text' >
                <h4>{channel} {verified && <CheckCircleIcon className="channelRow__chechkCircleIcon" />} </h4>
                <p> {subs} subscribers {noOfVideos} videos </p>
                <p> {description} </p>
            </div>
        </div>
    )
}

export default ChannelRow
