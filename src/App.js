import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import AddSongForm from './Components/AddSong/AddSongForm';
import NavBar from './Components/NavBar';

function App() {

  const [songs, setSongs] = useState([]);

  

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data);
    
  }

  function addNewSong(song){
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }

  

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div>
          <NavBar />
        </div>
        {/* <h3>Music Library</h3> */}
      </div>
      <div>
        <MusicTable parentSongs={songs}/>
        <SearchBar/>
      </div>
      <div>
        <AddSongForm addNewSongProperty={addNewSong}/>
      </div>
    </div>
  );
}

export default App;
