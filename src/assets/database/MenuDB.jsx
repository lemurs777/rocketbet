import React from "react";

import {ReactComponent as AllGamesIcon} from "../images/icons/allGames.svg";
import {ReactComponent as HomeIcon} from "../images/icons/home.svg";
import {ReactComponent as TopPickIcon} from "../images/icons/topPicks.svg";
import {ReactComponent as SlotPageIcon} from "../images/icons/slotPage.svg";
import {ReactComponent as BlackJackIcon} from "../images/icons/blackJack.svg";
import {ReactComponent as TableGameIcon} from "../images/icons/tableGames.svg";
import {ReactComponent as JackpotGameIcon} from "../images/icons/jackpotGames.svg";
import {ReactComponent as LiveCasinoIcon} from "../images/icons/liveCasino.svg";
import {ReactComponent as PokerGameIcon} from "../images/icons/pokerGames.svg";

const MenuDB = [
  {

    icon: <HomeIcon/>,
    link: '/',
  },
  {
    title: 'All games',
    icon: <AllGamesIcon/>,
    link: '/all'
  },
  {
    link: '/top',
    title: 'Top picks',
    icon: <TopPickIcon/>
  },
  {
    link: '/slots',
    title: 'Slot page',
    icon: <SlotPageIcon/>
  },
  {
    link: '/blackjack',
    title: 'Black Jack',
    icon: <BlackJackIcon/>
  },
  {
    link: '/table',
    title: 'Table games',
    icon: <TableGameIcon/>
  },
  {
    link: '/jackpot',
    title: 'Jackpot games',
    icon: <JackpotGameIcon/>
  },
  {
    link: '/casino',
    title: 'Live casino',
    icon: <LiveCasinoIcon/>
  },
  {
    link: '/poker',
    title: 'Poker games',
    icon: <PokerGameIcon/>
  },
]
export default MenuDB