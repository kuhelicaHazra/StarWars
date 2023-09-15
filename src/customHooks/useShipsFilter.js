import { useState, useEffect } from "react";

const useShipsFilter = (arr, limit, setMaxFilms, setTotalShips) => {
  const [datafiltered, setDatafiltered] = useState([]);
  useEffect(() => {
    if (arr.length > 0) {
      let datalist = [];
      let maxCount = 0;
      let array = Array.from(arr);
      array.map((_, i) => {
        let crew = _.crewCapacity.length > 1 ? _.crewCapacity.split(/[,|-]/) : [0, _.crewCapacity[0]];
        let item;
        if ((Number(limit) !== 0 && Number(crew[1]) < Number(limit)) || (Number(limit) === 0)) {
          _.crewCapacity = crew[0]+'-'+crew[1];
          if(Number(crew[0]) !== 0){
            item = Object.assign({},{'mincrew':crew[0]},_)
          } else if(Number(crew[0]) === 0){
            item = Object.assign({},{'mincrew':crew[1]},_)
          }
          datalist.push(item);
        }
        if(_.filmsCount > maxCount){
          maxCount = _.filmsCount;
        }
      }
      );
      setMaxFilms(maxCount);
      setTotalShips(datalist.length);
      datalist.sort((a,b)=>a.mincrew-b.mincrew);
      let dataarr = [datalist,{'maxFilmCount':maxCount}];
      setDatafiltered(dataarr);
    }



  }, [arr, limit])
  return [datafiltered];
};

export default useShipsFilter;