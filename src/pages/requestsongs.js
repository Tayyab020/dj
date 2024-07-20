import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestSongs = () => {
    const [filter, setFilter] = useState('');
    const [songs, setSongs] = useState([]);
    const localHttp = 'https://wishtun-d5e089f27132.herokuapp.com/admin';

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get(`${localHttp}/song`, {
                    params: { search: filter }
                });
                if (response.data.success) {
                    setSongs(response.data.data.getSongs);
                }
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs();
    }, [filter]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredSongs = songs.filter(song =>
        song.ownership.name.toLowerCase().includes(filter.toLowerCase())
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
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: 'none' }}>Price</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: 'none' }}>User Request</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSongs.map((song, index) => (
                            <tr key={index}>
                                <td style={{ padding: '10px', textAlign: 'left' }}>{song.name}</td>
                                <td style={{ padding: '10px', textAlign: 'left' }}>{song.ownership.name}</td>
                                <td style={{ padding: '10px', textAlign: 'left' }}>{song.duration}</td>
                                <td style={{ padding: '10px', textAlign: 'left' }}>{song.price}</td>
                                <td style={{ padding: '10px', textAlign: 'left' }}>
                                    {song.requestForSongs.length > 0
                                        ? song.requestForSongs.map(req => req.name).join(', ')
                                        : 'No requests'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestSongs;
