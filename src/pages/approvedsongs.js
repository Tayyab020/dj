import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApprovedSongs = () => {
  const [filter, setFilter] = useState('');
  const [songs, setSongs] = useState([]);
  const localHttp = 'https://wishtun-d5e089f27132.herokuapp.com/admin';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${localHttp}/user`);
        if (response.data.success) {
          const users = response.data.data;
          // Extract songs from isApprovedFor for each user
          const approvedSongs = users.flatMap(user =>
            user.isApprovedFor.map(song => ({
              ...song,
              dj: song.ownership.name,
              userName: user.name,
              userStatus: user.status,
              download: `${localHttp}/${song.songFile}`
            }))
          );
          setSongs(approvedSongs);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSongs = songs.filter(song =>
    song.dj.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Hello Evano 👋
        <input
          type="text"
          placeholder="Filter by DJ Name..."
          value={filter}
          onChange={handleFilterChange}
          style={{
            marginLeft: 'auto',
            padding: '10px',
            width: '300px',
            boxSizing: 'border-box'
          }}
        />
      </h1>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: 'solid black 1px' }}>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: 'none' }}>Song Name</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: 'none' }}>DJ Name</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: 'none' }}>Duration</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: 'none' }}>User Name</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: 'none' }}>Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredSongs.map((song, index) => (
              <tr key={index}>
                <td style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{song.name}</td>
                <td style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{song.dj}</td>
                <td style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{song.duration}</td>
                <td style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{song.userName}</td>
                <td style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                  <button
                    onClick={() => handleDownload(song.download)}
                    style={{
                      padding: '10px 20px',
                      background: '#000',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedSongs;
