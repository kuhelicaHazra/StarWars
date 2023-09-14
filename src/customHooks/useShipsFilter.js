import { useState, useEffect } from "react";

const useShipsFilter = (arr, limit) => {
  const [datafiltered, setDatafiltered] = useState([]);
  useEffect(() => {
    if (arr.length > 0) {
      let datalist = [];
      let maxCount = 0;
      let array = Array.from(arr);
      array.map((_, i) => {
        let crew = _.crewCapacity.length > 1 ? _.crewCapacity.split(/[,|-]/) : [0, _.crewCapacity[0]];
        if ((limit != 0 && Number(crew[1]) < Number(limit)) || (Number(limit) === 0)) {
          datalist.push(array[i]);
        }
        if(_.filmsCount > maxCount){
          maxCount = _.filmsCount;
        }
      }
      );
      let dataarr = [datalist,{'maxFilmCount':maxCount}];
      setDatafiltered(dataarr);
    }



  }, [arr, limit])
  return [datafiltered];
};

export default useShipsFilter;