import React from 'react';
import Styles from './VideoRow.module.scss';

const VideoRow = ({
    views,
    subs,
    description,
    timestamp,
    channel,
    title,
    image
}) => {
    return (
        <div className={Styles.main}>
            <div className={Styles.imgCol}>
                <img src={image} alt=""/>
            </div>
            <div className={Styles.text}>
                <h3>{title}</h3>
                <h5><span>{channel}</span> . {subs} Subscribers {views} . {timestamp}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
