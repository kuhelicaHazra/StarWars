import React, { useEffect, useRef, useState } from 'react';
import { Anchor, Card, Row, Col, Button, Space } from 'antd';
import Home from './landingComponent/Home';
import data from './config/utils.json';
import './App.scss';

const App = () => {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  const [headermsg, setTHeadermsg] = useState('All Airship Details');
  const value = useRef();
  const [search, setSearch] = useState(0);
  const [totalShips, setTotalShips] = useState(0);
  const [maxfilms, setMaxFilms] = useState(0);

  const updaterHeader = (e) => {
    e.preventDefault();
    let val = e.target.title;
    if (val == 'StarShips') {
      setTHeadermsg('Airship Details');
    }
    else if (val == 'People') {
      setTHeadermsg('Warrior Details');
    }
    else if (val == 'Planets') {
      setTHeadermsg('Planets And Base Details');
    }
  }

  const updateHomeHandler = () => {
    if (value && value.current.value) {
      setSearch(value.current.value);
    } else setSearch(0);

  }

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <div>
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            style={{
              height: '100vh',
              background: 'rgba(255,0,0,0.02)',
              marginTop: '25vh',
            }}
          >
            <Home filter={search} setMaxFilms={setMaxFilms} setTotalShips={setTotalShips}/>

          </div>
          <div
            id="part-2"
            style={{
              height: '100vh',
              background: 'rgba(0,255,0,0.02)',
              color: 'white'
            }}
          >
            <Card
              size="small"
              style={{
                width: 300,
                margin: '2em',
              }}
            >
              <p>Watch this space for updates !!! </p>
            </Card>

          </div>
          <div
            id="part-3"
            style={{
              height: '100vh',
              background: 'rgba(0,0,255,0.02)',
              color: 'white'
            }}
          >
            <Card
              size="small"
              style={{
                width: 300,
                margin: '2em',
              }}
            >
              <p>Watch this space for updates !!! </p>
            </Card>
          </div>
        </Col>
        <Col span={4}>
          <Anchor
            style={{ color: 'yellow' }}
            targetOffset={targetOffset}
            onClick={updaterHeader}
            items={data.navItems}
          />
          <Space wrap className='head2'>
              <p>Total spacecrafts: </p> {totalShips}
              <p>Highest Film Count: </p> {maxfilms} <span className='crown'>👑</span>
          </Space>
          <Space wrap className='head'>
            <p>Filter ships having crew members less than set limit </p>
            <input type='number' ref={value} />
            <Button type="primary" onClick={updateHomeHandler}>
              Search
            </Button>
          </Space>
        </Col>
      </Row>

      <div
        style={{
          height: '30vh',
          // background: 'rgba(0,0,0,0.85)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '75%',
          // color: '#FFF',
        }}
        ref={topRef}
      >

        <Row>
          <Col span={1} offset={3}>
            <img src={data.force} className='Catch-phrase' style={{ paddingTop: '5vh' }} alt="starwars" />
          </Col>
          <Col span={3} offset={3}>
            <img src={data.heart} className='Catch-phrase' style={{ paddingTop: '5vh' }} alt='' />
          </Col>
          <Col span={1}>
            <img src={data.starwars} alt='' className='starwars' style={{ paddingTop: '5vh' }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <span className='head'>{headermsg}</span>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default App;