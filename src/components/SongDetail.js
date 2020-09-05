import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    // console.log(props.mySong);
    if(!props.mySong) {
        return <div><h4>Select a song</h4></div>
    }
    return(
        <div>
            <h3>Details for:</h3>
                <p>Title: {props.mySong.title}
                <br />
                Duration: {props.mySong.duration}
                <br />
                Singer: {props.mySong.singer}
                </p>            
        </div>
    );
}

const mapStateToProps = (state) => {
    return { mySong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);