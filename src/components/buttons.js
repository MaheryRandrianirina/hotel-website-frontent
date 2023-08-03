import { useContext } from "react";
import { ClickEventHandlerContext } from "../contexts/clickEventContext";

function Button({children, className}){
    const clickEventHandler = useContext(ClickEventHandlerContext);

    return <button className={"btn " + (className ? className : "")} onClick={clickEventHandler}>{children}</button>
}

function PrimaryButton({children, className}){
    return <Button className={"btn-primary " + (className ? className : "")}>
        {children}
    </Button>
}

function SecondaryButton({children, className}){
    return <Button className={"btn-secondary " + (className ? className : "")}>
        {children}
    </Button>
}

function CTAButton({children}){
    return <PrimaryButton className="cta-btn">{children}</PrimaryButton>
}

export {
    Button,
    PrimaryButton,
    CTAButton,
    SecondaryButton
}