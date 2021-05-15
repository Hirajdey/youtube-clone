import React from 'react'
import SidebarMenu from '../sidebar-menu/SidebarMenu';
import Styles from './Sidebar.module.scss';

import HomeIcon from '@material-ui/icons/Home';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = () => {
    return (
        <div className={Styles.main}>
            <SidebarMenu selected Icon={HomeIcon} title="Home"/>
            <SidebarMenu Icon={WhatsAppIcon} title="Trending"/>
            <SidebarMenu Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>
            <SidebarMenu Icon={VideoLibraryIcon} title="Library"/>
            <SidebarMenu Icon={HistoryIcon} title="History"/>
            <SidebarMenu Icon={OndemandVideoIcon} title="Your videos"/>
            <SidebarMenu Icon={WatchLaterIcon} title="Watch later"/>
            <SidebarMenu Icon={ThumbUpAltOutlinedIcon} title="Liked video"/>
            <SidebarMenu Icon={ExpandMoreOutlinedIcon} title="Show more"/>
        </div>
    )
}

export default Sidebar
