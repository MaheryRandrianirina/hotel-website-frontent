import { useContext } from "react"
import { ClickEventHandlerContext } from "../contexts/clickEventContext"

export default function Navbar({menuList}){
    const clickMenuEventHandler = useContext(ClickEventHandlerContext);

    return <nav className="navbar">
        <ul>
            <li className="logo">
                <img src="/images/LOGO.jpg"/>
            </li>
            {menuList.map(menu => {
                if("type" in menu && menu.type === "dropdown"){
                    return <li key={menu.className} className={menu.className}>
                        <label>{menu.name} : </label> 
                        <select>
                            {menu.content.map(content => {
                                return <option key={content} value={content}>{content}</option>
                            })}
                        </select>
                    </li>
                }
                return <li onClick={menu.withoutClickEvent ? undefined : clickMenuEventHandler} key={menu.className} className={menu.className}>{menu.name}</li>
            })}
        </ul>
    </nav>
}