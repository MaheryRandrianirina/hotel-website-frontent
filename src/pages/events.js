import TV from "../components/icons/tv";
import Wifi from "../components/icons/wifi";
import Video from "../components/icons/video";
import Microphone from "../components/icons/microphone";
import WhineGlass from "../components/icons/whine-glass";
import GlassWhiskey from "../components/icons/glass-whiskey";
import Coffee from "../components/icons/coffee";
import Spoon from "../components/icons/spoon";

export default function Events(){
    return <div className="events">
        <h1>Salles de réunion</h1>
        <main>
            <img src="./hotel-website-frontent/images/room-one.jpeg" alt=""/>
            <img src="./hotel-website-frontent/images/room-two.jpg" alt=""/>
            <p className="img-caption">A partir de 85£</p>
            <p className="paragraph">
                Aut, perferendis natus explicabo sit magnam aliquam. 
                Vitae, cumque alias ea minima, ab quidem saepe , 
                reiciendis nemo fugit expedita distinctio voluptate harum.
            </p>

            <div className="more-services">
                <p className="title">MATERIELS ET SERVICES SUPPLEMENTAIRES</p>
                <div>
                    <TV/>
                    <p>Ecran de vidéo projecteur</p>
                </div>
                <div >
                    <Video/>
                    <p>Vidéo projecteur</p>
                </div>
                <div>
                    <Microphone/>
                    <p>Sonorisation avec micro</p>
                </div>
                <div>
                    <Wifi/>
                    <p>WIFI</p>
                </div>
                <div>
                    <GlassWhiskey/>
                    <p>Pause collation</p>
                </div>
                <div>
                    <Coffee/>
                    <p>Pause viennoiserie</p>
                </div>
                <div>
                    <WhineGlass/>
                    <p>Pause cocktail</p>
                </div>
                <div>
                    <Spoon/>
                    <p>Repas en collaboration avec notre partenaire</p>
                </div>
            </div>

            <div className="meeting-rooms-capacity">
                <p className="title">CAPACITE EN PERSONNES DES SALLES EN FONCTION DE LA DISPOSITION</p>
                <table>
                    <thead>
                        <tr>
                            <th>Salle</th>
                            <th>Karukera</th>
                            <th colSpan="5">Madinina</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Superficie (en m2)</td>
                            <td></td>
                            <td>Salle 1</td>
                            <td>Salle 2</td>
                            <td>Salle 3</td>
                            <td>Salle 2 + 3</td>
                            <td>Salle 1 + 2 + 3</td>
                        </tr>
                        <tr>
                            <td>Dimension (en m)</td>
                            <td>37</td>
                            <td>28</td>
                            <td>60</td>
                            <td>44</td>
                            <td>104</td>
                            <td>132</td>
                        </tr>
                        <tr>
                            <td>Capacité de personnes en U</td>
                            <td>7.10x7.20</td>
                            <td>5.15x5.45</td>
                            <td>4.85x12.40</td>
                            <td>4.85x8.40</td>
                            <td>4.85x22.20</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>En rectangle</td>
                            <td>15</td>
                            <td>14+2</td>
                            <td>32+4</td>
                            <td>20+2</td>
                            <td></td>
                            <td>Non</td>
                        </tr>
                        <tr>
                            <td>En scolaire</td>
                            <td></td>
                            <td>20</td>
                            <td>40</td>
                            <td>28</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>En cocktail</td>
                            <td>15</td>
                            <td>18+2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>En théatre</td>
                            <td>40</td>
                            <td>30</td>
                            <td>70</td>
                            <td>50</td>
                            <td>120</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>Ecran vidéo projecteur</td>
                            <td>30</td>
                            <td>28+2</td>
                            <td>66</td>
                            <td>48</td>
                            <td>114</td>
                            <td>138</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        <footer></footer>
    </div>
}