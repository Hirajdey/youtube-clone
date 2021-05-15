import { Avatar } from '@material-ui/core';
import React from 'react';
import Styles from './ChannelRow.module.scss';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';

const ChannelRow = ({image, channel, verified, subs, noOfVideos, description}) => {
    return (
        <div className={Styles.main}>
            <div className={Styles.avatarWrap}>
                <Avatar className={Styles.avatar} alt={channel} src={image}/>
            </div>

            <div className={Styles.text}>
                <h3>{channel}</h3>
                {verified && <span className={Styles.verified}>{<VerifiedUserOutlinedIcon/>}</span>}
                <h5><span>{subs} subscribers . </span> <span>{noOfVideos} videos</span></h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
