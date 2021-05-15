import { Avatar } from '@material-ui/core';
import React from 'react';
import Styles from './VideoCard.module.scss';

const VideoCard = ({ image, title, channel, views, timestamp, channelImage }) => {
    return (
        <div className={Styles.main}>
            <div className={Styles.imageBox}>
                <img src={image} alt={title}/>
            </div>
            
            <div className={Styles.info}>
                <Avatar className={Styles.avatar} alt={channel} src={channelImage}/>
                <div className={Styles.text}>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
