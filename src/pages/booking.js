import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CheckCircle from "../components/icons/check-circle";
import MinusCircle from "../components/icons/minus-circle";
import PlusCircle from "../components/icons/plus-circle";
import Bed from "../components/icons/bed";
import Ticket from "../components/icons/ticket";
import User from "../components/icons/user";
import ChevronRight from "../components/icons/chevron-right";
import ChevronLeft from "../components/icons/chevron-left";
import ArrowUp from "../components/icons/arrow-up";
import ArrowDown from "../components/icons/arrow-down";
import Moon from "../components/icons/moon";
import InfoCircle from "../components/icons/info-circle";
import { ClickEventHandlerContext }  from "../contexts/clickEventContext";

export default function Booking(){
    const [nightCount, setNightCount] = useState(1);

    const month = {
        0: "Janvier",
        1: "Février",
        2: "Mars",
        3: "Avril",
        4: "Mai",
        5: "Juin",
        6: "Juillet",
        7: "Août",
        8: "Septembre",
        9: "Octobre",
        10: "Novembre",
        11: "Décembre"
    }

    const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

    const [calendar, setCalendar] = useState({
        month: (new Date()).getMonth(),
        year:(new Date()).getFullYear(),
        firstDate: 1,
        numberOfDays: 0,
        firstDay: 1,
        numberOfWeek: 5,
        numberOfDaysArray: []
    });

    const [fisrtWeekAfterLastDate, setFirstWeekAfterLastDate] = useState(7);

    useEffect(()=>{
        const firstDate = (new Date(calendar.year, calendar.month)).getDate();
        const numberOfDays = 32 - (new Date(calendar.year, calendar.month, 32).getDate());
        const firstDay = (new Date(calendar.year, calendar.month, firstDate)).getUTCDay();
        
        setCalendar(c => {
            return {...c, firstDate: firstDate, numberOfDays: numberOfDays, firstDay: firstDay + 1}
        })

        setFirstWeekAfterLastDate(d => {
            if(calendar.firstDay === 1){
                return 8
            }else if(calendar.firstDay === 2){
                return 7
            }else if(calendar.firstDay === 3){
                return 6
            }else if(calendar.firstDay === 4){
                return 5
            }else if(calendar.firstDay === 5){
                return 4
            }else if(calendar.firstDay === 6){
                return 3
            }else if(calendar.firstDay === 7){
                return 2
            }
        });

    }, [calendar.firstDate, calendar.firstDay, calendar.year, calendar.month]);

    const selectRef = useRef();


    const handleClickMinus = (e)=>{
        setNightCount(c => {
            if(c > 1){
                return c - 1;
            }else {
                return 1;
            }
        })
    }

    const handleClickPlus = (e)=>{
        setNightCount(c => c + 1)
    }

    const handleChangeSelect = (e)=>{
        const select = e.currentTarget;
        const selectedIndex = select.selectedIndex;
            const options = Array.from(select.querySelectorAll("option"));
            const selectedOption = options[selectedIndex];
            const selectedOptionInnerText = selectedOption.innerText;

            const monthString = selectedOptionInnerText.split(' ')[0];
            const year = parseInt(selectedOptionInnerText.split(' ')[1]);
            
            setCalendarYearAndMonth(monthString, year);
    }

    const setCalendarYearAndMonth = (monthString, year) => {
        let monthNumber = 1;

        for(const i in month){
            if(month[i] === monthString){
                monthNumber = parseInt(i);
            }
        }

        setCalendar(c => {
            return {...c, year: year, month: monthNumber}
        })
    }

    const handleCalendarBack = (e)=>{
        const select = selectRef.current
        const selectedIndex = select.selectedIndex;
        const prevIndex = selectedIndex - 1;

        const prevOption = Array.from(select.querySelectorAll('option'))[prevIndex];
        const splittedPrevOptionValue = prevOption.value.split(' ');

        const prevMonthString = splittedPrevOptionValue[0];
        const prevYear = parseInt(splittedPrevOptionValue[1]);

        removeCellActiveDate();

        setCalendarYearAndMonth(prevMonthString, prevYear)
        
    }

    const removeCellActiveDate = ()=>{
        const cells = document.querySelectorAll('table td');
        cells.forEach(cell => {
            if(cell.classList.contains('active-date')){
                cell.classList.remove('active-date')
            }
        });
    }

    const handleClanderAfter = (e)=>{
        const select = selectRef.current
        const selectedIndex = select.selectedIndex;
        const nextIndex = selectedIndex + 1;

        const nextOption = Array.from(select.querySelectorAll('option'))[nextIndex];
        const splittedPrevOptionValue = nextOption.value.split(' ');

        const nextMonthString = splittedPrevOptionValue[0];
        const nextYear = parseInt(splittedPrevOptionValue[1]);

        removeCellActiveDate();

        setCalendarYearAndMonth(nextMonthString, nextYear);
    }

    const handleClickCell = (e) => {
        const clickedCell = e.currentTarget;
        console.log("click cell")
        const cells = document.querySelectorAll('td')
        if(cells.length > 0){
            cells.forEach(cell => {
                if(cell.classList.contains('active-date')){
                    cell.classList.remove('active-date');
                }
            })
        }

        if(clickedCell.innerText !== "" 
            && !clickedCell.classList.contains('active-date')
        ){
            clickedCell.classList.add('active-date');
        }
    }

    const getMonths = (year)=>{
        return <>
            <option value={month[0] + " " + year}>{month[0]} {year}</option>
            <option value={month[1] + " " + year}>{month[1]} {year}</option>
            <option value={month[2] + " " + year}>{month[2]} {year}</option>
            <option value={month[3] + " " + year}>{month[3]} {year}</option>
            <option value={month[4] + " " + year}>{month[4]} {year}</option>
            <option value={month[5] + " " + year}>{month[5]} {year}</option>
            <option value={month[6] + " " + year}>{month[6]} {year}</option>
            <option value={month[7] + " " + year}>{month[7]} {year}</option>
            <option value={month[8] + " " + year}>{month[8]} {year}</option>
            <option value={month[9] + " " + year}>{month[9]} {year}</option>
            <option value={month[10] + " " + year}>{month[10]} {year}</option>
            <option value={month[11] + " " + year}>{month[11]} {year}</option>
        </>
    }

    return <div className="booking-content">
        <section className="booking-header">
            <div className="adress">
                <h2>HOTEL RANDRIANIRINA</h2>
                <p>Route Ratsimandrava Analakely</p>
            </div>
            <div className="advantages">
                <h4>EN RESERVANT DIRECTEMENT VOUS BENEFICIEZ : </h4>
                <ul>
                    <li>Meilleur tarif Gratuit {CheckCircle()}</li>
                    <li>Réservez en toute sécurité {CheckCircle()}</li>
                    <li>Pas de frais supplémentaires {CheckCircle()}</li>
                </ul>
            </div>
        </section>
        
        <main>
            <div className="left">
                <div className="calendar">
                    <div className="illustration">
                        <div className="calendar-header">
                            <ChevronLeft onClick={handleCalendarBack}/>
                            <select ref={selectRef} value={month[calendar.month] + " " + calendar.year} onChange={handleChangeSelect}>
                                {years.map(year => {
                                    return <optgroup key={year} label={year}>
                                        {getMonths(year)}
                                    </optgroup>
                                })}
                            </select>
                            <ChevronRight onClick={handleClanderAfter}/>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Lun</th>
                                    <th>Mar</th>
                                    <th>Mer</th>
                                    <th>Jeu</th>
                                    <th>Ven</th>
                                    <th>Sam</th>
                                    <th>Dim</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                    
                                        { calendar.firstDay === 1 &&  <>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 1 ? "active-date" : ""}>1</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 2 ? "active-date" : ""}>2</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 3 ? "active-date" : ""}>3</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 4 ? "active-date" : ""}>4</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 5 ? "active-date" : ""}>5</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 6 ? "active-date" : ""}>6</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 7 ? "active-date" : ""}>7</td>
                                        </>}
                                        { calendar.firstDay === 2 &&  <>
                                            <td onClick={handleClickCell}></td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 1 ? "active-date" : ""}>1</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 2 ? "active-date" : ""}>2</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 3 ? "active-date" : ""}>3</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 4 ? "active-date" : ""}>4</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 5 ? "active-date" : ""}>5</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 6 ? "active-date" : ""}>6</td>
                                        </>}
                                        { calendar.firstDay === 3 &&  <>
                                            <td></td>
                                            <td></td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 1 ? "active-date" : ""}>1</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 2 ? "active-date" : ""}>2</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 3 ? "active-date" : ""}>3</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 4 ? "active-date" : ""}>4</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 5 ? "active-date" : ""}>5</td>
                                        </>}
                                        { calendar.firstDay === 4 &&  <>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 1 ? "active-date" : ""}>1</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 2 ? "active-date" : ""}>2</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 3 ? "active-date" : ""}>3</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 4 ? "active-date" : ""}>4</td>
                                        </>}
                                        { calendar.firstDay === 5 &&  <>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 1 ? "active-date" : ""}>1</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 2 ? "active-date" : ""}>2</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 3 ? "active-date" : ""}>3</td>
                                        </>}
                                        { calendar.firstDay === 6 &&  <>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 1 ? "active-date" : ""}>1</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 2 ? "active-date" : ""}>2</td>
                                        </>}
                                        { calendar.firstDay === 7 &&  <>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === 1 ? "active-date" : ""}>1</td>
                                        </>}
                                    </tr>
                                    <tr>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate ? "active-date" : ""}>{fisrtWeekAfterLastDate}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 1 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 1}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 2 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 2}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 3 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 3}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 4 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 4}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 5 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 5}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 6 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 6}</td>
                                    </tr>
                                    <tr>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 7 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 7}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 8 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 8}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 9 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 9}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 10 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 10}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 11 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 11}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 12 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 12}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 13 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 13}</td>
                                    </tr>
                                    <tr>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 14 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 14}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 15 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 15}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 16 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 16}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 17 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 17}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 18 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 18}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 19 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 19}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 20 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 20}</td>
                                    </tr>
                                    <tr>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 21 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 21}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 22 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 22 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 22}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 23 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 23 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 23}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 24 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 24 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 24}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 25 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 25 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 25}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 26 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 26 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 26}</td>
                                        <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 27 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 27 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 27}</td>
                                    </tr>
                                    {fisrtWeekAfterLastDate + 28 <= calendar.numberOfDays && 
                                        <tr>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 28 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 28 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 28}</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 29 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 29 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 29}</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 30 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 30 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 30}</td>
                                            <td onClick={handleClickCell} className={(new Date()).getDate() === fisrtWeekAfterLastDate + 31 ? "active-date" : ""}>{fisrtWeekAfterLastDate + 31 <= calendar.numberOfDays && fisrtWeekAfterLastDate + 31}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    }
                            </tbody>
                        </table>
                    </div>
                    <div className="notes">
                        <div className="impossible-coming">
                            <ArrowDown/>
                            <p>Arrivée impossible</p>
                        </div>
                        <div className="available-nights">
                            <Moon/>
                            <p className="number-of-nights">4</p>
                            <p>Nombre de nuits disponibles</p>
                        </div>
                        <div className="impossible-starting">
                            <ArrowUp/>
                            <p>Départ impossible</p>
                        </div>
                        <div className="restrictions">
                            <InfoCircle/>
                            <p>Restrictions à cette date</p>
                        </div>
                        
                    </div>
                </div>
                <div className="offers">
                    <h2>Nos offres</h2>
                    <div className="appartment">
                        <img src="/images/hotel.jpg"/>
                        <p>Appartement</p>
                        <a className="know-more">En savoir plus</a>
                    </div>
                    <div className="rooms">
                        <img src="/images/hotel.jpg"/>
                        <p>Chambre</p>
                        <a className="know-more">En savoir plus</a>
                    </div>
                </div>
            </div>
            <div className="right">
                <p className="right-header">RESERVEZ VOTRE SEJOUR</p>
                <div className="content">
                    <div className="coming">
                        <p>Arrivée</p>
                        <input type="date"/>
                    </div>
                    <div className="starting">
                        <p>Départ</p>
                        <input type="date"/>
                    </div>
                    <div className="night">
                        <p>Nuit</p>
                        <div className="night-number">
                            <MinusCircle onClick={handleClickMinus}/>
                            <p>{nightCount}</p>
                            <PlusCircle onClick={handleClickPlus}/>
                        </div>                         
                    </div>
                    <div className="bedrooms">
                        <div className="icons">
                            <Bed/>
                            <User/>
                        </div>
                        <select>
                            <option>Chambres : 1. Personnes : 2</option>
                            <option>Chambres : 1. Personnes : 3</option>
                        </select>
                    </div>
                    <div className="coupon">
                        <div className="icons">
                            <Ticket/>
                        </div>
                        <input type="text" placeholder="Avez-vous un code promotionnel ?"/>
                    </div>
                </div>
                <div className="right-footer">
                    <p>SUR LE SITE : </p>
                    <p>Prix à partir de </p>
                    <h2>65 000 Ar</h2>
                </div>
            </div>
        </main>
    </div>
}