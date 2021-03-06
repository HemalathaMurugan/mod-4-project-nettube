import React from 'react'
import VideoContainer from './VideoContainer'
import NavBar from './NavBar'


export default class Main extends React.Component {

    render(){
        return(
            <div className="main-page">
                <NavBar handleSearch={this.handleSearch}/>
                <VideoContainer selectVideo={this.props.selectVideo} videos={this.props.videos} />
            </div>
        )
    }
}
