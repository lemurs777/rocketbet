import React from 'react';

import {ReactComponent as AllGamesIcon} from "../images/icons/allGames.svg";
import {ReactComponent as Favorite} from "../images/icons/favorite.svg";

import img1 from '../images/cards/allGames/card-1.jpg'
import img2 from '../images/cards/allGames/card-2.jpg'
import img3 from '../images/cards/allGames/card-3.jpg'
import img4 from '../images/cards/allGames/card-4.jpg'
import img5 from '../images/cards/allGames/card-5.jpg'
import img6 from '../images/cards/allGames/card-6.jpg'
import img7 from '../images/cards/allGames/card-7.jpg'
import img8 from '../images/cards/allGames/card-8.jpg'
import img9 from '../images/cards/allGames/card-9.jpg'
import img10 from '../images/cards/allGames/card-10.jpg'
import img11 from '../images/cards/allGames/card-11.jpg'


const AllGamesDb = [
  {
    title: 'All games',
    icon: <AllGamesIcon/>,
    card: [
      {
        image: img1,
        name: '777 Oktoberfest',
        icon: <Favorite/>
      },
      {
        image: img2,
        name: 'Aztec Magic',
        icon: <Favorite/>
      },
      {
        image: img3,
        name: 'Book of dead',
        icon: <Favorite/>
      },
      {
        image: img4,
        name: 'coinfest',
        icon: <Favorite/>
      },
      {
        image: img5,
        name: '777 Oktoberfest',
        icon: <Favorite/>
      },
      {
        image: img6,
        name: '777 Oktoberfest',
        icon: <Favorite/>
      },
      {
        image: img7,
        name: 'Green Machine Supreme',
        icon: <Favorite/>
      },
      {
        image: img8,
        name: 'Tropical Bonanza',
        icon: <Favorite/>
      },
      {
        image: img5,
        name: 'Moon princess',
        icon: <Favorite/>
      },
      {
        image: img9,
        name: 'benny biggest game',
        icon: <Favorite/>
      },
      {
        image: img10,
        name: 'wolf power',
        icon: <Favorite/>
      },
      {
        image: img11,
        name: 'book of poseidon',
        icon: <Favorite/>
      },
    ]


  }
]

export default AllGamesDb;