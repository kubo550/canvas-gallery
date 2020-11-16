import React, { useState } from "react";
import CanvasImage from "../components/CanvasImage";
import { useQuery } from 'react-query';
import { fetchFromFirebase } from '../api';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading, isError } = useQuery(['firebaseData', query], fetchFromFirebase);

  return (
    <Container>
      <Row>
        <label className="search col-12 text-center">
          <input type="text" placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} />
          <i className="fas fa-search"></i>
        </label>
      </Row>

      <Row>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && data.map((e, i) => <CanvasImage key={e.id} data={e} index={i} />)}
      </Row>
    </Container>
  );
}

export default Home;
