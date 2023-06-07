import React from "react";


// маршруты (особенные):
const WAYS = [
    {
        pointA: "101",
        pointB: "116",
        mapOneFloor: (
            <img className="MapWays" src="https://sun9-64.userapi.com/impg/s65im7YMkMdCoIeMeoKeMyogoNfaoimn88IaPA/fgLYETDNsvI.jpg?size=623x653&quality=96&sign=8249e76294ca9ca7101899c04e9040e5&type=album" alt="ImageMap" />
        ),
        instruction1: "",
        mapTwoFloor: (
            <img className="MapWays" src="https://sun9-20.userapi.com/impg/VPJDb2IE2UbVZO3qlOFkRZAGC8ipqjuGr2O_Dg/CfYWOa3DxSI.jpg?size=622x653&quality=96&sign=e0d4e7a0e2a8dbf688eb9a6e7dd7cfa6&type=album" alt="ImageMap" />
        ),
        instruction2: "",
    }
];


// TODO: Реорганизовать данные по примеру:
// const WAYS_EXAMPLES = [
//     {
//         pointA: "101",
//         pointB: "116",
//         data: [{
//             img: <img className="MapWays" src="https://sun9-64.userapi.com/impg/s65im7YMkMdCoIeMeoKeMyogoNfaoimn88IaPA/fgLYETDNsvI.jpg?size=623x653&quality=96&sign=8249e76294ca9ca7101899c04e9040e5&type=album" alt="ImageMap" />,
//             floor: 1,
//             instruction1: "123123",
//         }, {
//             img: <img className="MapWays" src="https://sun9-20.userapi.com/impg/VPJDb2IE2UbVZO3qlOFkRZAGC8ipqjuGr2O_Dg/CfYWOa3DxSI.jpg?size=622x653&quality=96&sign=e0d4e7a0e2a8dbf688eb9a6e7dd7cfa6&type=album" alt="ImageMap" />,
//             floor: 2,
//             instruction2: "123123",
//         }],
//     }
// ];

// маршруты (основные):
export const DATA_WAYS = [
        {
          pointA: "Вход",
          pointB: "102",
          mapOneFloor: (
            <img className="MapWays" src="https://clck.ru/34FVLj" alt="ImageMap" />
          )
        },
        {
          pointA: "Вход",
          pointB: "101",
          mapOneFloor: (
            <img className="MapWays" src="https://clck.ru/34FVQ9" alt="ImageMap" />
          )
        },
        ...WAYS
      ];