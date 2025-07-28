import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip'
import { players, xBonus } from '../../assets/database/Db'
import rocket from '../../assets/images/crash/rocket.png'
import spaceBg from '../../assets/images/crash/space-bg.png'
import { ReactComponent as PlayIcon } from '../../assets/images/icons/play.svg'
import ButtonGradient from '../Buttons/ButtonGradient/ButtonGradient'
import Switch from '../UI/Switch/Switch'
import styles from './Crash.module.scss'
const Crash = () => {
	const [activePlayer, setActivePlayer] = useState(players[0].id)
	const [start, setStart] = useState(false)
	const sums = ['+ 10', '+ 50', '+ 100', '+200', 'Max']
	const [bonus, setBonus] = useState(0)
	const [bonusFirst, setBonusFirst] = useState(0)
	const [maxBonus, setMaxBonus] = useState(49)
	const [maxBonusFirst, setMaxBonusFirst] = useState(4)
	useEffect(() => {
		if (start && bonus !== maxBonus) {
			const interval = setInterval(() => {
				setBonus(prev => prev + 1)
			}, 70)
			return () => {
				clearInterval(interval)
			}
		}
	}, [start, bonus, bonusFirst])
	useEffect(() => {
		if (start && bonusFirst !== maxBonusFirst) {
			const intervalFirst = setInterval(() => {
				setBonusFirst(prev => prev + 1)
			}, 1000)
			return () => {
				clearInterval(intervalFirst)
			}
		}
	}, [start, bonusFirst])
	return (
		<div className={styles.crash}>
			<div className={styles.crash__inner}>
				<div className={styles.crash__left}>
					<div className={styles.crashLine}>
						<div className={styles.crashLine__sum}>$ 5962</div>
						<div className={styles.crashLine__online}>
							<span className={styles.crashLine__onlineDecor}></span>
							250 игроков в игре
						</div>
					</div>
					<ul className={styles.crash__players}>
						{players.map(player => {
							return (
								<li
									key={player.id}
									onClick={() => {
										setActivePlayer(player.id)
									}}
									className={clsx(
										player.id === activePlayer ? styles.active : null,
										styles.player
									)}
								>
									<div className={styles.player__info}>
										<div className={styles.player__img}>
											<img src={player.image} alt={player.title} />
										</div>
										<div className={styles.player__title}>{player.title}</div>
									</div>
									<div className={styles.player__current}>{player.current}</div>
									{player.bonus ? (
										<div className={styles.player__bonus}>{player.bonus}</div>
									) : (
										<div
											className={clsx(
												styles.player__bonus,
												styles.player__bonusEmpty
											)}
										>
											n/a
										</div>
									)}
									{player.sum ? (
										<div className={styles.player__sum}>{player.sum}</div>
									) : (
										<div className={styles.player__sum}>n/a</div>
									)}
								</li>
							)
						})}
					</ul>
				</div>
				<div className={styles.crash__right}>
					<div
						className={styles.space}
						style={{ backgroundImage: `url(${spaceBg})` }}
					>
						<div
							className={clsx(
								start ? styles.active : null,
								styles.space__rocket
							)}
						>
							<img src={rocket} alt='' />
						</div>
						<ul className={styles.space__xBonus}>
							{xBonus.map((bonus, index) => {
								return (
									<li
										key={index}
										className={styles.space__item}
										style={{ backgroundColor: bonus.color }}
									>
										{bonus.title}
									</li>
								)
							})}
						</ul>
						{/* <div className={styles.space__bonus}>2.49 X</div> */}
						<div className={styles.space__bonus}>
							{bonusFirst}.{bonus} X
						</div>
					</div>
					<div className={styles.crash__bottom}>
						<div className={styles.frame}>
							<div className={styles.frame__top}>
								<button
									className={clsx(styles.frame__btnDisabled, styles.frame__btn)}
								>
									Меньше
								</button>
								<div className={styles.frame__counter}>$ 980</div>
								<button className={styles.frame__btn}>Больше</button>
							</div>
							<ul className={styles.frame__sums}>
								{sums.map(sum => {
									return (
										<li key={sum} className={styles.frame__sumsItem}>
											{sum}
										</li>
									)
								})}
							</ul>
						</div>
						<ButtonGradient
							onClick={() => {
								setStart(true)
							}}
							className={styles.crash__play}
						>
							<PlayIcon />
							<span>Играть</span>
						</ButtonGradient>
						<div className={styles.frame}>
							<div className={styles.frame__top}>
								<button
									className={clsx(styles.frame__btnDisabled, styles.frame__btn)}
								>
									Меньше
								</button>
								<div className={styles.frame__counter}>X 2.00</div>
								<button className={styles.frame__btn}>Больше</button>
							</div>
							<div className={styles.frame__bottom}>
								<Switch />
								<span>Автоматически</span>
								<div className={styles.frame__info}>
									<Tooltip id='my-tooltip' />
									<button
										className={styles.info}
										data-tooltip-id='my-tooltip'
										data-tooltip-content='Hello world!'
										data-tooltip-place='top'
									>
										?
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Crash
