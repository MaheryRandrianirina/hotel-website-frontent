import { createContext } from "react";

const ClickEventHandlerContext = createContext((e)=> { e.preventDefault(); })

export { ClickEventHandlerContext }