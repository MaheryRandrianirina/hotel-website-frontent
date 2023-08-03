import SwimmingPool from "../components/icons/swimming-pool";
import Parking from "../components/icons/parking";
import Car from "../components/icons/car";
import LightBulb from "../components/icons/lightbulb";
import Wifi from "../components/icons/wifi";
import Tshirt from "../components/icons/tshirt";
import Broom from "../components/icons/broom";

export default function Residence(){
    return <div className="place-page">
        <h1>La résidence</h1>
        <main>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className="paragraph">
                Aut, perferendis natus explicabo sit magnam <span>aliquam</span>. 
                Vitae, cumque alias ea minima, ab <span>quidem saepe</span> , 
                reiciendis nemo fugit <span>expedita</span> distinctio voluptate harum.
            </p>
            <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique provident debitis, facere sequi in.
            </p>

            <div className="free-services">
                <p className="title">Services gratuits</p>
                <div>
                    <SwimmingPool/>
                    <p>Piscine</p>
                </div>
                <div className="parking">
                    <Parking/>
                    <Car/>
                    <p>Parking gratuit non surveillé</p>
                </div>
                <div>
                    <LightBulb/>
                    <p>Eau, Electricité</p>
                </div>
            </div>

            <div className="services">
                <p className="title">Services payants</p>
                <div>
                    <Broom/>
                    <p>Ménage</p>
                </div>
                <div>
                    <Wifi/>
                    <p>Wifi disponible à certaines appartements et à la térrasse de l'hôtel</p>
                </div>
                <div>
                    <Tshirt/>
                    <p><span>Laverne automatique : </span>5 machines à laver et sécher disponible 7 jours /7</p>
                </div>
            </div>
        </main>
    </div>
}