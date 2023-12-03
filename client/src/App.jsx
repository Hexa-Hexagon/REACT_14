import { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const get = async() => {
      const response = await fetch('http://localhost:5000/api');
      const data = await response.json();
      setApiData(data);
    }
    get();
  }, []);

  return (
    <div>
      {apiData.map((data) => <p key={apiData.indexOf(data)}>{data}</p>)}
    </div>
  );
}

export default App;
