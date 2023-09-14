import React, { useEffect, useRef, useState } from 'react';
import { Anchor, InputNumber, Row, Col, Button, Space } from 'antd';
import Home from './landingComponent/Home';
import data from './config/utils.json';
import './App.scss';

const App = () => {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  const [headermsg, setTHeadermsg] = useState('All Airship Details');
  const value = useRef();
  const [viewfilter, setViewfilter] = useState(false);
  const [search, setSearch] = useState(0);

  const updaterHeader = (e) => {
    e.preventDefault();
    let val = e.target.title;
    if (val == 'StarShips') {
      setTHeadermsg('All Airship Details');
      setViewfilter(true);
    }
    else if (val == 'People') {
      setTHeadermsg('Warrior Details');
      setViewfilter(false);
    }
    else if (val == 'Planets') {
      setTHeadermsg('Planets And Base Details');
      setViewfilter(false);
    }
  }

  const updateHomeHandler = () => {
    if(value && value.current.value){
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
            <Home filter={search}/>
            
          </div>
          <div
            id="part-2"
            style={{
              height: '100vh',
              background: 'rgba(0,255,0,0.02)',
              color:'white'
            }}
          >
            Watch this space for updates !!! 
          </div>
          <div
            id="part-3"
            style={{
              height: '100vh',
              background: 'rgba(0,0,255,0.02)',
              color:'white'
            }}
          >
            Watch this space for updates !!! 
          </div>
        </Col>
        <Col span={4}>
          <Anchor
            style={{ color: 'yellow' }}
            targetOffset={targetOffset}
            onClick={updaterHeader}
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'StarShips',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'People',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Planets',
              },
            ]}
          />
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
          //height: '30vh',
          //background: 'rgba(0,0,0,0.85)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          //color: '#FFF',
        }}
        ref={topRef}
      >

        <Row>
          <Col span={1} offset={3}>
            <img src={data.force} className='Catch-phrase' style={{ paddingTop: '5vh' }} alt="starwars" />
          </Col>
          <Col span={3} offset={3}>
            <img src={data.heart} className='Catch-phrase' style={{ paddingTop: '5vh' }} alt='' />
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        {
          viewfilter &&  <Row>
          <Col>

          </Col>
        </Row>
        }

        {/* <div><img src={data.force} className='Catch-phrase' alt="starwars" /></div> */}
      </div>
    </div>
  );
};
export default App;