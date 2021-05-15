import React from 'react';
import Styles from './SearchPage.module.scss';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './channel-row/ChannelRow';
import VideoRow from './video-row/VideoRow';

// const videoRowData = [
//     {   
//         id:0,
//         views:"1.4m",
//         subs:"659k",
//         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ad repellendus.",
//         timestamp:"",
//         channel:"",
//         title:"",
//         image:""
//     }
// ]

const videoRowData = [
    {
        id:0,
        title:"Become a Web Developer in 10 Minutes | 2019/2020",
        views:"2.3M Views",
        subs:"659k",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ad repellendus.",
        timestamp:"3 days ago",
        channel:"Hiraj Dey",
        image:"https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
    },
    {
        id:1,
        title:"Become a Web Developer in 10 Minutes | 2019/2020",
        views:"2.3M Views",
        timestamp:"3 days ago",
        subs:"659k",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ad repellendus.",
        channel:"Hiraj Dey",
        image:"https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
    },
    {
        id:2,
        title:"Become a Web Developer in 10 Minutes | 2019/2020",
        views:"2.3M Views",
        timestamp:"3 days ago",
        subs:"659k",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ad repellendus.",
        channel:"Hiraj Dey",
        image:"https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
    },
    {
        id:3,
        title:"Become a Web Developer in 10 Minutes | 2019/2020",
        views:"2.3M Views",
        timestamp:"3 days ago",
        subs:"659k",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ad repellendus.",
        channel:"Hiraj Dey",
        image:"https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
    }
]


const SearchPage = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.filter}>
                <TuneOutlinedIcon/>
                <h4>FILTER</h4>
            </div>
            <hr/>

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj"
                channel="Clever Programmer"
                verified
                subs="659K"
                noOfVideos={382}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum neque esse praesentium debitis itaque nobis, quo architecto voluptate repudiandae facere iure autem quibusdam obcaecati, illum voluptatibus. Suscipit possimus nemo dolore."  
            />

            <hr/>

            {videoRowData.map(viderow => (
                <VideoRow
                    views={viderow.views}
                    subs={viderow.subs}
                    description={viderow.description}
                    timestamp={viderow.timestamp}
                    channel={viderow.channel}
                    title={viderow.title}
                    image={viderow.image}
                />
            ))}
            


        </div>
    )
}

export default SearchPage
