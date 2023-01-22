//Zeller's Algorithm
/*(0 = sábado, 1 = domingo, 2 = lunes, 3 = martes, 4 = miércoles, 5 = jueves, 6 = viernes).*/
export default function zellerAlgorithm(date, month, year) {
	let day = 0 
	let q = date
	let m = month
	if (month === 1) { 
		m = 13
		year -= 1
	}
	if (month === 2) { 
		m = 14 
		year -= 1
	}
	let j = Math.floor(year/100)
	let k = year % 100
	day = ( q + Math.floor(13*(m + 1)/5) + k + Math.floor(k/4) + Math.floor(j/4) + 5*j ) % 7
	return day
}