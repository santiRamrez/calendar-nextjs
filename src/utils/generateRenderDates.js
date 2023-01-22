import zellerAlgorithm from "./zellerAlgorithm";

export default function generateRenderDates(month, year) {
        // month  --> should be a number [1 - 12]
        // year --> should be a number [1975 - infinity]

        //Zeller's Algorithm --> Return a number 
        //-> (0 = saturday, 1 = sunday, 2 = monday, 3 = tuesday, 4 = wednesday, 5 = thursday, 6 = friday)
        let firstDay = zellerAlgorithm(1, month, year) 

        //Create padding in order of be awere of which dates should I set vissibility = hidden;
        // The order of the days is --> ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let paddingDays = firstDay === 0 ? 6 : firstDay - 1   
        
        //Calculate the dates to render according to leap year
        let qtyDays = new Date(year, month, 0).getDate()

        return [paddingDays, qtyDays]
}