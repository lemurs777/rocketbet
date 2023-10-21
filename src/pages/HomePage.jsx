import React, { useEffect, useRef } from 'react'
import MenuCenter from '../components/MenuCenter'
import { ReactComponent as LiveCasinoIcon } from '../assets/images/icons/liveCasino.svg'
import AllGamesDB from '../assets/database/AllGamesDB'
import PopularGamesDB from '../assets/database/PopularGamesDB'
import RocketLiveLoungeDB from '../assets/database/RocketLiveLoungeDB'
import GameBlock from '../components/GameBlock'
import Card from '../components/Card'
import PromotionsDB from '../assets/database/PromotionsDB'
import Head from '../components/Head'

import { ReactComponent as FavoriteIcon } from '../assets/images/icons/favorite.svg'
import { ReactComponent as PromoIcon } from '../assets/images/icons/promotions.svg'
import { ReactComponent as InfoIcon } from '../assets/images/icons/info.svg'
import { ReactComponent as RatingIcon } from '../assets/images/icons/rating.svg'
import { ReactComponent as StudiosIcon } from '../assets/images/icons/gameStudios.svg'
import { ReactComponent as AllGames } from '../assets/images/icons/allGames.svg'
import ReviewsDB from '../assets/database/ReviewsDB'
import Review from '../components/Review'
import StudiosDB from '../assets/database/StudiosDB'
import Studios from '../components/Studios'
import Results from '../components/Results'
import Banner from '../components/Banner'
import MainSlider from '../components/MainSlider/MainSlider'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { clsx } from 'clsx'
import { Navigation, Grid } from 'swiper/modules'
import styles from '../components/Card/Card.module.scss'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'

const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<main className='main main--index'>
			<div className='container'>
				<Modal />
				<MainSlider />
				<MenuCenter />
				{AllGamesDB.map(props => (
					<div key={props.title}>
						<GameBlock title={props.title} icon={props.icon}>
							{props.card.map((props, index) => (
								<div key={index} className='allCard'>
									<Card image={props.image} name={props.name} icon={props.icon}>
										<button className={styles.card__favorite} type='button'>
											<FavoriteIcon />
										</button>
									</Card>
								</div>
							))}
						</GameBlock>
					</div>
				))}
				<section className='banner section'>
					<Banner />
				</section>
				{PopularGamesDB.map(props => (
					<div key={props.title} className='popularBlock'>
						<Head icon={props.icon} title={props.title}>
							<div className='navs'>
								<button className='nav-btn nav-btn--prev popular-prev'></button>
								<button className='nav-btn popular-next'></button>
							</div>
							<button className='btn btn--see' type='button'>
								See all
							</button>
						</Head>
						<Swiper
							spaceBetween={8}
							slidesPerView={2.3}
							grid={{
								rows: 2,
								fill: 'row',
							}}
							navigation={{
								nextEl: '.popular-next',
								prevEl: '.popular-prev',
							}}
							modules={[Grid, Navigation]}
							breakpoints={{
								991: {
									spaceBetween: 16,
									slidesPerView: 4,
								},
							}}
							className='popularSwiper'
						>
							{props.card.map((props, index) => (
								<SwiperSlide key={index}>
									<Card image={props.image} name={props.name} icon={props.icon}>
										<button className={styles.card__favorite} type='button'>
											<FavoriteIcon />
										</button>
									</Card>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				))}
				<div className='lounge'>
					<Head icon={<LiveCasinoIcon />} title="Rocket's Live Lounge">
						<div className='navs'>
							<button className='nav-btn nav-btn--prev lounge-prev'></button>
							<button className='nav-btn lounge-next'></button>
						</div>
						<Link to='/lounge' className='btn btn--see' type='button'>
							See all
						</Link>
					</Head>
					<Swiper
						spaceBetween={8}
						slidesPerView={2.3}
						navigation={{
							nextEl: '.lounge-next',
							prevEl: '.lounge-prev',
						}}
						breakpoints={{
							768: {
								spaceBetween: 16,
								slidesPerView: 4,
							},
						}}
						className='loungeSwiper'
						modules={[Navigation]}
					>
						{RocketLiveLoungeDB.map((props, index) => (
							<SwiperSlide key={index}>
								<Card image={props.image} name={props.name} icon={props.icon}>
									<button className={styles.card__favorite} type='button'>
										<FavoriteIcon />
									</button>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className='popular'>
					<Head icon={<PromoIcon />} title='Promotions'>
						<Link to='/promo' className='btn btn--see' type='button'>
							See all
						</Link>
					</Head>

					<div className='list popular__list'>
						{PromotionsDB.map((props, index) => (
							<div key={index}>
								<Card
									classes='promoCard'
									image={props.image}
									name={props.name}
									icon={props.icon}
								>
									<button className={styles.card__favorite} type='button'>
										<InfoIcon />
									</button>
								</Card>
							</div>
						))}
					</div>
				</div>
				<section className='reviews section'>
					<div className='reviews__header'>
						<Head icon={<RatingIcon />} title='Ratings & Reviews'>
							<button className='btn btn--see' type='button'>
								See all
							</button>
						</Head>
					</div>
					<ul className='reviews__items'>
						{ReviewsDB.map((props, index) => {
							return (
								<li key={index}>
									<Review
										description={props.description}
										name={props.name}
										image={props.avatar}
									/>
								</li>
							)
						})}
					</ul>
				</section>
				<section className='studios section'>
					<div className='studios__header'>
						<Head icon={<StudiosIcon />} title='Game studios'>
							<button className='btn btn--see' type='button'>
								See all
							</button>
						</Head>
					</div>
					<ul className='studios__items'>
						{StudiosDB.map((props, index) => {
							return (
								<li key={props.title}>
									<Studios
										title={props.title}
										image={props.image}
										amount={props.amount}
									/>
								</li>
							)
						})}
					</ul>
				</section>
				<section className='results section'>
					<Head icon={<AllGames />} title='Player results' />
					<Results />
				</section>
			</div>
		</main>
	)
}

export default HomePage
