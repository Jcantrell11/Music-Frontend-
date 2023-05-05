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
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/music/', song);
      if(response.status === 201){
        await getAllSongs();
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  async function searchLibrary(setQuery){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    const filteredMusic = response.data.filter((song) => {
        if (
          song.title.toLowerCase().includes(setQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(setQuery.toLowerCase()) ||
          song.album.toLowerCase().includes(setQuery.toLowerCase()) ||
          song.release_date.toLowerCase().includes(setQuery.toLowerCase()) ||
          song.genre.toLowerCase().includes(setQuery.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      setSongs(filteredMusic);
    };
    
    // useEffect(() => {
    //   const filteredSongs = searchLibrary(searchValue);
    //   setSongs(filteredSongs);
    // }, [searchValue]);



  

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='navbar'>
          <NavBar />
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <MusicTable parentSongs={songs}/>
            <SearchBar searchLibrary={searchLibrary}/>
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
