import Clock from "../components/icons/clock";
import Phone from "../components/icons/phone";
import StarOfLife from "../components/icons/star-of-life";
import TV from "../components/icons/tv";
import Wifi from "../components/icons/wifi";
import Lock from "../components/icons/lock";
import Key from "../components/icons/key";

export default function HotelPresentation(){
    return <div className="hotel-presentation">
        <h1>L' hôtel</h1>
        <main>
            <img src="./hotel-website-frontent/images/hotel.jpg" alt=""/>
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

            <div className="bedrooms-equipments">
                <p className="title">Equipements des chambres</p>
                <div>
                    <StarOfLife/>
                    <p>Climatisation individuelle</p>
                </div>
                <div>
                    <TV/>
                    <p>Télévision écran plat 80 cm</p>
                </div>
                <div>
                    <Phone/>
                    <p>Téléphone avec accès à l'international</p>
                </div>
                <div>
                    <Lock/>
                    <p>Coffret de sûreté individuel électronique</p>
                </div>
                <div>
                    <Clock/>
                    <p>Réveil matin</p>
                </div>
                <div>
                    <Wifi/>
                    <p>Wifi gratuit</p>
                </div>
                <div>
                    <Key/>
                    <p>
                        Pour votre sécurité, les serrures des portes d'entrées fonctionnent avec des cartes magnétiques.
                        Ce qui garantit une sécurité complémentaire et une aisance d'utilisation.
                    </p>
                </div>
            </div>
        </main>
        <footer></footer>
    </div>
}