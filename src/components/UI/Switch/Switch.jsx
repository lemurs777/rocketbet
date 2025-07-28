import React from 'react'
import styles from './Switch.module.scss'
const Switch = () => {
	const [checked, setChecked] = React.useState(false)
	return (
		<>
			<input
				onChange={() => setChecked(!checked)}
				className={styles.switchCheckbox}
				style={{display:'none'}}
				id={`switch`}
				type='checkbox'
			/>
			<label
				className={styles.switchLabel}
				htmlFor={`switch`}
			>
				<span className={styles.switchButton} />
			</label>
		</>
	)
}

export default Switch
