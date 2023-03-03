import { useState } from 'react'

export const Datepicker = () => {
	//TODO extraer estado para guardar fecha
	const [date, setDate] = useState(new Date())
	return <input type={'date'} value={date} onChange={(date) => setDate(date)} />
}
