import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    
    if(!song)
    {
        return (<div></div>);
    }
    
	return (<div>{song.title}  {song.singer}</div>);
}

const mapStateToProps = (state) => {
   
  return {song:state.selectedSong};

};

export default connect(mapStateToProps)(SongDetail);