import { ClickEventHandlerContext } from "../contexts/clickEventContext";
import Booking from "../pages/booking";
import Contact from "../pages/contact";
import Events from "../pages/events";
import HotelPresentation from "../pages/hotel-presentation";
import Residence from "../pages/residence";
import Navbar from "./navbar";
import Welcome from "./welcome";
import {useEffect, useState} from "react";

export default function Hotel(){
    const [currentPage, setCurrentPage] = useState("welcome");

    const [menuList, setMenuList] = useState([]);

    useEffect(()=>{
        if(currentPage === "welcome"){
            setMenuList([
                {name: "Hotel", className: "hotel"},
                {name: "Résidence", className: "place"},
                {name: "RESERVATION", className: "booking"},
                {name: "Réunion & Evénements", className: "meeting-and-events"},
                {name: "Contact", className: "contact"},
            ]);
        }else if(currentPage === "booking"){
            setMenuList([
                {name: "Annuler/Gérer votre réservation", className: "manage-booking"},
                {
                    name: "Dévise", 
                    className: "devise", 
                    type: "dropdown", 
                    content: ["Ariary - Ar","Dollar - $", "Livre - £"]
                },
                {name: "Retour au site", className: "back"}
            ]);
        }else if(currentPage === "hotel-presentation"){
            setMenuList([
                {name: "Hotel Randrianirina ** et Résidence", className: "caption", withoutClickEvent: true},
                {name: "Retour au site", className: "back"}
            ]);
        }else if(currentPage === "place"){
            setMenuList([
                {name: "Hotel Randrianirina ** et Résidence", className: "caption", withoutClickEvent: true},
                {name: "Retour au site", className: "back"}
            ]);
        }else if(currentPage === "events"){
            setMenuList([
                {name: "Hotel Randrianirina ** et Résidence", className: "caption", withoutClickEvent: true},
                {name: "Retour au site", className: "back"}
            ]);
        }else if(currentPage === "contact-page"){
            setMenuList([
                {name: "Hotel Randrianirina ** et Résidence", className: "caption", withoutClickEvent: true},
                {name: "Retour au site", className: "back"}
            ]);
        }
    }, [currentPage])

    const handleClickBookButton = (e)=>{        
        setCurrentPage("booking");
    }

    const handleClickMenu = (e)=>{
        const menu = e.currentTarget;
        const className = menu.classList;
        
        if(className.contains('back')){
            setCurrentPage('welcome')
        }else if(className.contains('hotel')){
            setCurrentPage('hotel-presentation')
        }else if(className.contains('place')){
            setCurrentPage('place')
        }else if(className.contains("meeting-and-events")){
            setCurrentPage('events');
        }else if(className.contains("contact")){
            setCurrentPage('contact-page');
        }else if(className.contains("booking")){
            setCurrentPage('booking');
        }
    }

    return <div className={"hotel " + currentPage}>
        <ClickEventHandlerContext.Provider value={handleClickMenu}>
            <Navbar menuList={menuList}/>
        </ClickEventHandlerContext.Provider>
        
        { currentPage === "welcome" && <ClickEventHandlerContext.Provider value={handleClickBookButton}>
            <Welcome/>
        </ClickEventHandlerContext.Provider>}

        { currentPage === "booking" && <Booking/>}

        { currentPage === "hotel-presentation" && <HotelPresentation/>}

        { currentPage === "place" && <Residence/>}

        { currentPage === "events" && <Events/>}

        { currentPage === "contact-page" && <Contact/>}
    </div>
}