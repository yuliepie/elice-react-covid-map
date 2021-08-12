import React, { useEffect, useState } from "react";
import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "./area/all_area";
import axios from "axios";

const fillColor = ["#4088da", "#ffb911", "#fc7001", "#e60000"];

function CovidMap() {
  const [covidData, setCovidData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    axios.post("http://127.0.0.1:5000/covidData").then((response) => {
      // request successful
      setCovidData(response.data);
    });
  }, []);

  // useEffect(() => {
  //   console.log("covid data state: ", covidData);
  // }, [covidData]);

  const handleClick = (e) => {
    const area = e.target.id;
    setSelectedData({
      area,
      num: covidData.data[area].num,
      level: covidData.data[area].level,
    });
  };

  return covidData === null ? (
    <div>Loading...</div>
  ) : (
    <div>
      {selectedData && (
        <>
          <h2>{selectedData.area}</h2>
          <p>확진자 수 : {selectedData.num}</p>
          <p>거리두기 단계 : {selectedData.level}</p>
        </>
      )}
      <h4>{covidData.updated_data} 기준</h4>
      <svg width="700px" height="1000px" viewBox="0 0 800 1200">
        <Seoul
          fill={fillColor[covidData.data["서울"].level - 1]}
          onClick={handleClick}
        />
        <Gyeonggi
          fill={fillColor[covidData.data["경기"].level - 1]}
          onClick={handleClick}
        />
        <Gangwon
          fill={fillColor[covidData.data["강원"].level - 1]}
          onClick={handleClick}
        />
        <Incheon
          fill={fillColor[covidData.data["인천"].level - 1]}
          onClick={handleClick}
        />
        <Chungnam
          fill={fillColor[covidData.data["충남"].level - 1]}
          onClick={handleClick}
        />
        <Chungbuk
          fill={fillColor[covidData.data["충북"].level - 1]}
          onClick={handleClick}
        />
        <Sejong
          fill={fillColor[covidData.data["세종"].level - 1]}
          onClick={handleClick}
        />
        <Daejeon
          fill={fillColor[covidData.data["대전"].level - 1]}
          onClick={handleClick}
        />
        <Gyeongnam
          fill={fillColor[covidData.data["경남"].level - 1]}
          onClick={handleClick}
        />
        <Gyeongbuk
          fill={fillColor[covidData.data["경북"].level - 1]}
          onClick={handleClick}
        />
        <Jeonbuk
          fill={fillColor[covidData.data["전북"].level - 1]}
          onClick={handleClick}
        />
        <Jeonnam
          fill={fillColor[covidData.data["전남"].level - 1]}
          onClick={handleClick}
        />
        ;
        <Ulsan
          fill={fillColor[covidData.data["울산"].level - 1]}
          onClick={handleClick}
        />
        <Busan
          fill={fillColor[covidData.data["부산"].level - 1]}
          onClick={handleClick}
        />
        <Daegu
          fill={fillColor[covidData.data["대구"].level - 1]}
          onClick={handleClick}
        />
        <Gwangju
          fill={fillColor[covidData.data["광주"].level - 1]}
          onClick={handleClick}
        />
        <Jeju
          fill={fillColor[covidData.data["제주"].level - 1]}
          onClick={handleClick}
        />
      </svg>
    </div>
  );
}
export default CovidMap;
