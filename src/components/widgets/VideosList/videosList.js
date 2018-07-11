import React,{Component} from 'react'; 
import styles from './videosList.css'; 
// import axios from 'axios'; 
import {firebaseTeams, firebaseVideos, firebaseLooper} from '../../../firebase';

// import {URL} from '../../../config'; 
import Button from '../Buttons/buttons'; 
import VideosListTemplate from './videosListTemplate';

class VideosList extends Component { 
    state = { 
        teams:[], 
        videos:[], 
        start: this.props.start,
        end:this.props.start + this.props.amount, 
        amount: this.props.amount
    }

    componentWillMount(){ 
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => { 
        if(this.state.teams.length < 1) { 
            firebaseTeams.once('value')
            .then((snapshot)=>{
                const teams = firebaseLooper(snapshot);
                this.setState({
                    teams
                })
            })
        }
        firebaseVideos.orderByChild('id').startAt(start).endAt(end).once('value')
        .then((snapshot)=>{
            const videos = firebaseLooper(snapshot);
            this.setState({
                videos:[...this.state.videos,...videos],
                start,
                end
            })
        })
        .catch(e=>{
            console.log(e)
        })
    }

    renderVideos = () => { 
        let template = null; 

        switch(this.props.type) { 
            case('card'):
            template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
                break;
                default: 
                    template = null;
        }
            return template
    }

    loadMore = () => { 
        let end = this.state.end + this.state.amount; 
        this.request(this.state.end + 1, end)
    }

    renderTitle = () => { 
        return this.props.title ? 
        <h3><strong>NBA</strong>Videos</h3> : null 
    }

    render() { 
        return(
            <div className="videosList_wrapper">
                {this.renderTitle()}
                {this.renderVideos()}
                <Button type="loadmore" loadMore={() => this.loadMore()}  cta="Load More Videos" />
            </div>
        )
    }


}

export default VideosList;  