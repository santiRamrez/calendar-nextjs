import styles from './calendar.module.css' 

export default function CalendarUI() {
    return (
        <div className={styles.containerUI}>
            <div className={styles.calHeader}>
                <h2>Today:<span id="today"></span></h2>
                <select class="selectBtn" id="months"> 
                    <option class="option">-- Month --</option>
                    <option class="option">January</option>
                    <option class="option">February</option>
                    <option class="option">March</option>
                    <option class="option">April</option>
                    <option class="option">May</option>
                    <option class="option">June</option>
                    <option class="option">July</option>
                    <option class="option">August</option>
                    <option class="option">September</option>
                    <option class="option">October</option>
                    <option class="option">November</option>
                    <option class="option">December</option>
                </select>
		        <input type="text" id="year" placeholder="Type a year"/> 
            </div>
            <div className={styles.listDays}>
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
            </div>
            <div className={styles.contDates}>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                    <div className={styles.date}>10</div>
                  
            </div>
        </div>
    )
}