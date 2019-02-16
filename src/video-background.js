import React from 'react';

class Video extends React.Component {
    constructor(props) {

        super(props);

    }

    render() {
        let video=require('../src/show.mp4');
        return (
            <video preload="auto" autoPlay="autoplay"
                   loop="loop">
                <source src={video} type="video/mp4"/></video>
        )
    }

}

export default Video