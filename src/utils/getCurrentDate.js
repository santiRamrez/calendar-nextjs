//Today is --> returns a string
function todayIs() {
    const dt = new Date()
    const currentDay = dt.getDate()
    const currentMonth = dt.getMonth()
    const currentYear = dt.getFullYear()
    let today = new Date(currentYear, currentMonth, currentDay)

    today = today.toLocaleDateString("es-es", {
        weekday:"long",
        year:"numeric",
        month:"long",
        day: "numeric"
    })
    return today;
}

//Format date --> returns a string
function formatStringDate(d) {
	let arr = d.split(" ")
	let output = arr[0].slice(0,1).toUpperCase() + arr[0].substring(1) + " " + arr[1] + " " + arr[2] + " " + arr[3].slice(0,1).toUpperCase() + arr[3].substring(1) + " " + arr[4] + " " + arr[5]
	return output
}

export default function getCurrentDate() {
    const t = todayIs()
    return formatStringDate(t)
}