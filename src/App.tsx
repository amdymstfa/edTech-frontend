import { useEffect, useState } from 'react';
import { axiosClient } from './lib/axiosClient';

function App() {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    axiosClient.get('/ping/')
      .then((res) => setStatus(res.data.status))
      .catch(() => setStatus('error'));
  }, []);

  return <div>Backend status: {status}</div>;
}

export default App;
