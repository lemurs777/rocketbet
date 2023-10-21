import React, { useEffect } from 'react'
import Header from '../components/Header'
import MenuCenter from '../components/MenuCenter'
import Search from '../components/Search'
import { LiveCasinoDB } from '../assets/database/LiveCasinoDB'
import Card from '../components/Card'
import styles from '../components/Card/Card.module.scss'
import Head from '../components/Head'
import Results from '../components/Results'
import Footer from '../components/Footer'
import { ReactComponent as FavoriteIcon } from '../assets/images/icons/favorite.svg'
import { ReactComponent as PlayerIcon } from '../assets/images/icons/player.svg'
import { PokerDB } from '../assets/database/PokerDB'
import FilterLine from '../components/FilterLine'
import TitleBg from '../components/TitleBg'

const PokerPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className='pokerPage'>
			<main className='main main--poker'>
				<div className='container'>
					<MenuCenter />
					<FilterLine>
						<TitleBg>Poker Games</TitleBg>
					</FilterLine>
					<Search placeholder={'Search Live casino'} />
					<div className='list pokerPage__items'>
						{PokerDB.map((props, index) => (
							<Card name={props.name} image={props.image}>
								<button className={styles.card__favorite} type='button'>
									<FavoriteIcon />
								</button>
							</Card>
						))}
					</div>

					<section className='section'>
						<Head title='Player results' icon={<PlayerIcon />} />
						<Results />
					</section>
				</div>
			</main>
		</div>
	)
}

export default PokerPage
