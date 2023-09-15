import './landing.scss';
import Landing from './Landing';
import { Col, Row } from 'antd';
import utils from '../config/utils.json';
import useShips from '../customHooks/useShips';
import useShipsFilter from '../customHooks/useShipsFilter';

function Home(props) {
    const [data] = useShips(utils.starships);
    const [datafiltered] = useShipsFilter(data,props.filter,props.setMaxFilms,props.setTotalShips);
  console.log(datafiltered);

  return (
    <div>
      {datafiltered && <Landing data={datafiltered}/>}
    </div>
  );
}

export default Home;
