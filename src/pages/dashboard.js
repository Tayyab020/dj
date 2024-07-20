import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatisticCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  flex: 1;
  text-align: center;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;

const Dashboard = () => {
  const [djData, setDjData] = useState([]);
  const [totalSongs, setTotalSongs] = useState(0);
  const [totalDjs, setTotalDjs] = useState(0);
  const localHttp = 'https://wishtun-d5e089f27132.herokuapp.com/admin';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch DJ data
        const response = await axios.get(`${localHttp}/song/byDj`);
        if (response.data.success) {
          const data = response.data.data;
          setDjData(data);
        }

        // Fetch total songs
        const statsResponse = await axios.get(`${localHttp}/song/`);
        if (statsResponse.data.success) {
          const songData = statsResponse.data.data.getSongsCount;
          setTotalSongs(songData);
        }

        // Fetch total DJs
        const statsDJResponse = await axios.get(`${localHttp}/dj/`);
        if (statsDJResponse.data.success) {
          const djCount = statsDJResponse.data.data.djCount; // Assuming djData contains an array of DJs
          setTotalDjs(djCount);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardContainer>
      <StatisticsContainer>
        <StatisticCard>
          <h3>Total Songs</h3>
          <p>{totalSongs}</p>
        </StatisticCard>
        <StatisticCard>
          <h3>DJs</h3>
          <p>{totalDjs}</p>
        </StatisticCard>
      </StatisticsContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>DJ Name</th>
              <th>Total Songs</th>
              <th>DJ Email</th>
            </tr>
          </thead>
          <tbody>
            {djData.map((dj, index) => (
              <tr key={index}>
                <td>{dj.name}</td>
                <td>{dj.songsCount}</td>
                <td>{dj.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
