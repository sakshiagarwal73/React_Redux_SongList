import { combineReducers } from 'redux';



const songsReducer = () => {
    
 return [
 {title:"manwa laage",singer : "Shreya Ghoshal"},
 {title:"deewani mastani",singer : "Shreya Ghoshal"},
 {title:"mile ho tum",singer : "Neha Kakkar"},
 {title:"Agar tum saath ho",singer : "Alka Yagnik"},
 {title:"Shayad",singer : "Arijit Singh"},
 {title:"Sapna Jahan",singer : "Sonu Nigam"},
 {title:"Chaand Chupa",singer : "Udit Narayan"},
 {title:"Ami je Tomar",singer : "Shreya Ghoshal"}
 ];

};

const selectedSongReducer  = (selectedSong = null,action) => {
   
   if(action.type==="SONG_SELECTED")
   {
   	  return action.payload;
   }

   return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});