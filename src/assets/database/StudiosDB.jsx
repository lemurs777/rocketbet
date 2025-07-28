import React from "react";

import {ReactComponent as Platipus} from "../images/studios/platipus.svg";
import {ReactComponent as Bgaming} from "../images/studios/bgaming.svg";
import {ReactComponent as Belatra} from "../images/studios/belatra.svg";
import {ReactComponent as Amatic} from "../images/studios/amatic.svg";


const StudiosDB = [
  {
    image: <Platipus/>,
    title: 'Platipus',
    amount: '80 games'
  },
  {
    image: <Bgaming/>,
    title: 'BGaming',
    amount: '88 games'
  },
  {
    image: <Belatra/>,
    title: 'Belatra',
    amount: '67 games'
  },
  {
    image: <Amatic/>,
    title: 'Amatic',
    amount: '130 games'
  },
]

export default StudiosDB;