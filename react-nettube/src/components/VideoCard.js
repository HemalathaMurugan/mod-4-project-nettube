import React from 'react'
import { withRouter} from 'react-router-dom'

export default withRouter(class VideoCard extends React.Component {
    
    render(){
        let date = this.props.created_at
        return(	
            <div onClick={() => this.props.history.replace(`/video/${this.props.id}`)} className="video-card">      
                <div className="video-card-details">
                    <video width="400" controls="controls" preload="metadata">
                    <source src={this.props.url} type="video/mp4"/>
                    Your browser does not support HTML5 video.
                    </video>
                    <h4>Title: {this.props.title}</h4>
                    <p>Language: {this.props.language}</p>
                    <p>Youtube Name</p>
                    <p>Uploaded at {date.slice(0,10)}</p>
                </div>
            </div>   
        )
    }
})