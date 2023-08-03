import { CTAButton, SecondaryButton } from "../components/buttons";
import Phone from "../components/icons/phone";
import Home from "../components/icons/home";
import Fax from "../components/icons/fax";
import Envelope from "../components/icons/envelope";
import Plane from "../components/icons/plane";


export default function Contact(){
    return <div className="contact">
        <h1>Contact Accès</h1>
        <main>
            <div className="left">
                <div className="all-contact">
                    <Home/>
                    <p className="title">CONTACT</p>
                    <div className="rtc">
                        <div className="phone">
                            <Phone/>
                            <p>034 38 444 97</p>
                        </div>
                        <div className="fax">
                            <Fax/>
                            <p>034 38 444 97</p>
                        </div>
                    </div>
                    <div className="email">@: <span>randrianirinahotel@gmail.com</span></div>
                    <div className="adress">
                        <Envelope/>
                        <p>Adresse</p>
                        <div className="details">
                            <p>Hotel Randrianirina</p>
                            <p>Route Ratsimandrava Analakely</p> 
                            <p>3709BDD ANTANANARIVO 301</p>  
                        </div>
                    </div>
                </div>

                <div className="accessibility">
                    <p className="title">ACCESSIBILITE</p>
                    <div>
                        <Plane/>
                        <p>
                            De l'aéroport ou de la garre routière, vous pouvez louer une voiture ou prendre un taxi. 
                            Il y a également des bus en journées et pendant la semaine.
                        </p>
                    </div>
                </div>
            </div>
            <div className="right">
                <CTAButton>RESERVEZ</CTAButton>
                <div className="newsletter">
                    <p>Abonnez-vous à notre newsletter</p>
                    <label>E-mail</label>
                    <input type="email"/>
                    <SecondaryButton>Je m'abonne</SecondaryButton>
                </div>
            </div>
        </main>
    </div>
}