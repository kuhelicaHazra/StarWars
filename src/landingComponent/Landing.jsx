import React from 'react';
import './landing.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Image, Space } from 'antd';
import MovieSvg from '../svgComponent/MovieSvg';
import SpaceshipSvg from '../svgComponent/SpaceshipSvg';
import util from '../config/utils.json';
import {
  QqOutlined
} from '@ant-design/icons';

function Landing(props) {
  let filmMaxCount = 0;
  const data = props.data[0];
  if (data && data.length > 0) {
    filmMaxCount = props.data[1].maxFilmCount;
  }


  return (
    <>
      {
        data ? <div
          id="scrollableDiv"
          style={{
            height: 550,
            overflow: 'auto',
            padding: '0 16px 5vh 5vh',
            border: '3px solid rgb(191 192 218 / 72%)',
          }}
        >
          <InfiniteScroll
            dataLength={data.length}
            endMessage={<Divider className='divider'>That is all, nothing more 🤐</Divider>}
          >
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.name}>
                  <List.Item.Meta
                    avatar={<><Avatar src={item.avatar} /> <Image width={150} className='App-logo' src={item.spaceshipImage} /></>}
                    title={
                      <span className='text_color yellow'>
                        {item.name}&nbsp;&nbsp;{filmMaxCount == item.filmsCount ? (<span className='crown'>👑</span>) : ''}
                      </span>}
                    description={
                      <>
                        <span className='text_color content'>{item.content}</span>
                        <div className='text_color subdetails'>
                          <div className='content'>
                            <SpaceshipSvg />
                            <b>Model: {item.description}</b>
                          </div>
                          <div className='content'>
                            <MovieSvg />
                            <b>&nbsp; Films Count: {item.filmsCount}</b>
                          </div>
                          <div className='content'>
                            <QqOutlined style={{ color: 'red', fontSize: '30px', paddingTop: '2vh' }} />
                            <b>&nbsp; Crew Count: {item.crewCapacity}</b>
                          </div>
                        </div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div> : <Space wrap className='head2' style={{marginLeft: '20em'}}>
          <p>Loading... </p><span className='crown'><img text="loading" style={{ color: 'yellow' }} src={util.loadimg}></img></span>
        </Space>
      }
    </>
  );
}

export default Landing;
