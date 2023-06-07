import './App.css';
import React, { useState } from "react";
import cn from "classnames"
import { getCabinetByName, getWays } from "./actions/actions";

function checkEmpty(value) {
  return value.trim().length === 0 || !value
}

function App() {
  // Поиск кабинета
  const [cabinetValue, setCabinetValue] = useState("");
  const [cabinet, setCabinet] = useState([]);
  // Маршруты
  const [pointAState, setPointAState] = useState("");
  const [pointBState, setPointBState] = useState("");
  const [waysFilter, setWaysFilter] = useState([]);
  // Этажи
  const [floor, setFloor] = useState(1);
  const onChangeCabinetValue = (e) => {
    // TODO: проверить, что cabinet из стейта не больше ограничений
    // if true -> alert, else -> setState
    setCabinetValue(e.target.value);
  }
  // Кнопка поиска
  const onClickSearch = async () => {

    setCabinet([])

    setPointAState("");
    setPointBState("");
    setWaysFilter([]);

    // Поле поиска: example - " string ".trim() -> "string"
    const value = cabinetValue.charAt(0).toUpperCase() + cabinetValue.slice(1).trim()
    const isError = checkEmpty(value)
    if (isError) {
      alert("Вы не указали помещение.")
      return;
    }

    const newData = await getCabinetByName(value, (floor) => setFloor(floor));
    setCabinet(newData);
  };

  const onChangePointA = (e) => setPointAState(e.target.value);
  const onChangePointB = (e) => setPointBState(e.target.value);
  // Кнопка построения маршрута
  const onClickWays = async () => {
    setCabinetValue("");
    setCabinet([]);

    const a = pointAState.charAt(0).toUpperCase() + pointAState.slice(1).trim()
    const b = pointBState.charAt(0).toUpperCase() + pointBState.slice(1).trim()

    if (checkEmpty(a) || checkEmpty(b)) {
      alert("Вы не указали пункт отправления или назначения.")
      return;
    }

    const newData = await getWays(a, b);
    setWaysFilter(newData);
  };
  // Очистка форм
  const onClear = () => {
    setCabinetValue("");
    setPointAState("");
    setPointBState("");

    // Очистка состояния данных
    setWaysFilter([]);
    setCabinet([]);
  };
  // Проверка на пустые формы
  console.debug(waysFilter)
  const isEmpty = waysFilter ? waysFilter.length === 0 && cabinet.length === 0 : true;

  const buttonStyles = (valueFloor) => cn({
    "App-Floor-Button": true,
    "App-Floor-Button_active": valueFloor === floor
  })
  const onClickFloor = (floor) => {
    setFloor(floor);
    setCabinet([]);

  }
  return (
    <div className="App">
      <header className="App-header">
        <a>Навигатор ККРИТ</a>
        <div>
          <input className="App-Search2-Input" value={cabinetValue} placeholder='Поиск по ККРИТ' maxLength={20} onChange={onChangeCabinetValue} />
          <button className="App-Search-Button" type="button" onClick={onClickSearch}>Поиск кабинета</button>
        </div>

        <div>
          <button className={buttonStyles(1)} type="button" onClick={() => onClickFloor(1)}>1 Этаж</button>
          <button className={buttonStyles(2)} type="button" onClick={() => onClickFloor(2)}>2 Этаж</button>
          <button className={buttonStyles(3)} type="button" onClick={() => onClickFloor(3)}>3 Этаж</button>
          <button className={buttonStyles(4)} type="button" onClick={() => onClickFloor(4)}>4 Этаж</button>
        </div>

        <input className="App-Point-A-Input" value={pointAState} placeholder='Откуда' maxLength={20} onChange={onChangePointA} />
        <input className="App-Point-B-Input" value={pointBState} placeholder='Куда' maxLength={20} onChange={onChangePointB} />

        <div>
          <button className="App-Build-Route-Button" type="button" onClick={onClickWays}>Построить маршрут</button>
          <button className="App-Clear-Button" type="button" onClick={onClear}>Очистить</button>
        </div>

        {isEmpty && floor === 1 && <img className='MapFloor1Clear' src="http://localhost:7777/ways/1Floor.png" alt="altF1" />}
        {isEmpty && floor === 2 && <img className='MapFloor2Clear' src='http://localhost:7777/ways/2Floor.png' alt='altF2' />}
        {isEmpty && floor === 3 && <img className='MapFloor3Clear' src='http://localhost:7777/ways/3Floor.png' alt='altF3' />}
        {isEmpty && floor === 4 && <img className='MapFloor4Clear' src='http://localhost:7777/ways/4Floor.png' alt='altF4' />}

        {waysFilter && waysFilter.map((d, index) => (
          <div key={index}>

            <p>
              {d.infoways ? d.infoways : ""}
            </p>
            <div>
              {floor == 1 && <img className='MapFloor1Clear' src={d.map1}/>}
              {floor == 2 && <img className='MapFloor2Clear' src={d.map2}/>}
              {floor == 3 && <img className='MapFloor3Clear' src={d.map3}/>}
              {floor == 4 && <img className='MapFloor4Clear' src={d.map4}/>}
            </div>

          </div>
        ))}

        {cabinet.map((d, index) => (
          <div key={index}>
            <p>
              {d.infocab}
            </p>
            <div>
              {floor == d.floor && <img src={d.mapcab} />}
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
