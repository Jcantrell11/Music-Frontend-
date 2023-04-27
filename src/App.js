import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import AddSongForm from './Components/AddSong/AddSongForm';
import NavBar from './Components/NavBar';
import './App.css';

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

  async function addNewSong(song){
    
    // let tempSongs = [...songs, song];
    // setSongs(tempSongs);
    // setSongs(response.data);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/music/', song);
      // setSongs(response.data);
      if(response.status === 201){
        await getAllSongs();
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div>
          <NavBar />
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <MusicTable parentSongs={songs}/>
            <SearchBar/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <AddSongForm addNewSongProperty={addNewSong}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
