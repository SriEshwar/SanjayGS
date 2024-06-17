import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setData(response.data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      }, 2000); // 2 seconds delay
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data Fetching with Axios and useEffect</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
