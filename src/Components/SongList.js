import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

//second argument to connect is the action creator
//first argument is mapStateToProps
//mapStateToProps is called whenever there is a change in the state
//connect() basically helps the react component get access to data inside the store


class SongList extends React.Component
{
	renderList()
	{
		return this.props.songs.map(song => {

             return (

             	<div  key = {song.title}>
             	<div >{song.title}</div>
                <div >
                <button onClick = {() => this.props.selectSong(song)} className = "ui button library">
                Select
                </button>
                </div>
                
                </div>
             	);


		} );
	}

	render()
	{
		console.log(this.props);
		return (<div className = "ui divided list">{this.renderList()}</div>);
	}
}

const mapStateToProps = (state) => {
       
       console.log(state);
       return {songs:state.songs};
}

export default connect(mapStateToProps,{selectSong:selectSong})(SongList);