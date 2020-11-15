import React, { useState } from "react";
import CanvasImage from "../components/CanvasImage";
import { useQuery } from 'react-query'
import { fetchFromFirebase } from '../api'

const Home = () => {
  const [query, setQuery] = useState('')
  const {data, isLoading, isError} = useQuery(['firebaseData', query], fetchFromFirebase)

  return (
    <div className="container">

      <div className="row">
        <label className="search col-12 text-center">
            <input type="text" placeholder="Search"  value={query} onChange={e => setQuery(e.target.value)} />
            <i className="fas fa-search"></i>
        </label>
      </div>

      <div className='row'>
       {isLoading && <p>Loading...</p> }
       {isError && <p>Error</p> }
       {data &&  data.map(e => <CanvasImage key={e.id} data={e} /> )}
      </div>
      
    </div>
  );
};

export default Home;
