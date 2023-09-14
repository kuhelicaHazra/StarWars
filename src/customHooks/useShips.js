import { useState, useEffect } from "react";
import axios from 'axios';
import logo from '../logo.svg';
import datautils from '../config/utils.json';

const useShips = (url) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function fetchdata(){
        const response = await axios.get(url).then((res) => res.data);
        const dataList = Array.from(response.results).map((_, i) => ({
                    name: _.name,
                    description: _.model,
                    url:_.url,
                    avatar: logo,
                    crewCapacity:_.crew,
                    spaceshipImage: datautils.spaceship[i],
                    content:
                      _.name+ 'belogs to starship model '+ _.model+' manufactered by '+_.manufacturer +
                       ' , max_atmosphering_speed '+ _.max_atmosphering_speed + ' has crew capacity '+_.crew +
                      ' can carry passengers upto '+_.passengers+ ' and cargo capacity of '+_.cargo_capacity + '.',
                    filmsCount: _.films.length
                  })
            );
        setData(dataList);
    }
    fetchdata();
  },[url])

  return [data];
};

export default useShips;