import React, { useContext, useState, useEffect } from 'react'
import PlaylistView from './PlaylistView'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import SinglePlaylistCard from './common/SinglePlaylistCard';
import SongContext from '../context/SongContext'
import { getMyPlaylist, getAllPlaylist } from '../apiCalling/playlist';
import SingleSongCard from './common/SingleSongCard'

const focusData = [
  {
    id: "1",
    title: "Peaceful Piano",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: "data:image/jpeg;base64,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"
  },
  {
    id: "2",
    title: "Deep Focus",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: "https://imgs.search.brave.com/c8zUv6LQwsjiD3lgP9a9fuICIS8v9JbqDfB85ZDH8Tw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzc3LzYyLzM4/LzM2MF9GXzI3NzYy/MzgzNV82WnZtUDhw/ZjRJdmpNUHNsaENS/dmFsUUZ6eGUzdGtU/cS5qcGc"
  },
  {
    id: "3",
    title: "Instrumental Stud",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: "https://imgs.search.brave.com/YUevtF5IINkvFsGJdeGK8MqqnA9cPG2jYMs90OJXBUo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFOC1a/VGNFLW8vMS8wLzE2/MDB3L2NhbnZhLWJs/YWNrLXNpbXBsZS1t/dXNpYy1zdHVkaW8t/bG9nby1VQ2ZFQzc3/c3BXby5qcGc"
  },
  {
    id: "4",
    title: "Focus Flow",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: "https://imgs.search.brave.com/nd-EkxR44qaO-Dert07fWxDtirUZYvAimveO7i0-2aY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFNzht/WUk5dWcvNS8wLzE2/MDB3L2NhbnZhLWJs/YWNrLWFuZC13aGl0/ZS1tdXNpYy1zdHVk/aW8tbG9nby1HYzJf/b2xEdDBCTS5qcGc"
  },
  {
    id: "5",
    title: "Workday Lounge",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgUrl: "data:image/jpeg;base64,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"
  },
]


const HomePage = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  const [playlists, setPlaylists] = useState([]);
  const [allPlaylist, setAllPlaylist] = useState([]);
  const getPlaylists = async () => {
    const response = await getAllPlaylist();
    setAllPlaylist(response?.data?.playlists)
  }
  useEffect(() => {
    const getData = async () => {
      if(cookie.token){
        const response = await getMyPlaylist(cookie.token)
        setPlaylists(response?.data?.playlistDetails)
      }
    }
    if(cookie.token) getData();
    getPlaylists()
  }, [cookie.token])
  const { currentModal, setCurrentModal, currentSong, currentPlaylist, playlistOpen, setPlaylistOpen } = useContext(SongContext)
  const clickHandler = () => {
    setCurrentModal(false)
  }
  return (
    <div className='w-full h-full flex bg-black p-3 gap-2'>
      <Sidebar />
      <div className='h-full w-[77%] overflow-auto rounded-xl bg-gradient-to-b from-[#1f2728] via-[#131618] to-[#070808]'>
        <Navbar />
        {
          currentModal ?
            (<div className='bg-slate-900 w-full h-[80%] bg-opacity-70 p-8'>
              <button onClick={clickHandler} className='text-white'>Back</button>
              <div className='bg-slate-600 w-[50%] h-[50%] overflow-auto rounded-lg m-auto'>
                <p className='text-white p-5 text-xl font-bold'>Select Playlist</p>
                {
                  playlists.map((item) => (
                    <SinglePlaylistCard key={item._id} item={item} song={currentSong} />
                  ))
                }
              </div>
            </div>) :
            (
              <div>
                {
                  playlistOpen ? (<div>
                    <button className='text-white text-lg p-5' onClick={() => { setPlaylistOpen(false) }}>Back</button>
                    {
                      currentPlaylist.songs.map((song, index) => (
                        <SingleSongCard key={index} info={song} />
                      ))
                    }
                  </div>) : (<Outlet />)
                }
              </div>
            )
        }

        {
          !cookie.token &&
          (
            <div className='h-full w-full overflow-auto rounded-xl bg-gradient-to-b from-[#1f2728] via-[#131618] to-[#070808]'>
              {/* <PlaylistView title="Spotify Playlist" data={allPlaylist} /> */}
              <PlaylistView title="Focus" data={focusData} />
              <PlaylistView title="Spotify Playlist" data={focusData} />
              <PlaylistView title="Sound of India" data={focusData} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HomePage