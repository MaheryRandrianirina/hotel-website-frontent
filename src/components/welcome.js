import { CTAButton } from "./buttons";
import ChevronRight from "./icons/chevron-right";

export default function Welcome(){
    return <div className="welcome-content">
        <h1>HOTEL RANDRIANIRINA</h1>
        <p>Un maitre dans l'art du déco en plein coeur d'Antananarivo</p>
        <CTAButton >
            Réserver maintenant <ChevronRight/>
        </CTAButton>
    </div>
}