

//action creator 
//action - name of song selected
export const selectSong = (song) => {

	return{

		type:'SONG_SELECTED',
		payload: song

	};

};

