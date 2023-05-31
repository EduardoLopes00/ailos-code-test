import { MenuItem } from "@app/infra/types/MenuItem";

export const menuItems: MenuItem[] = [
    {
        label: "Pesquisar",
        icon: "search",
        route: "/register",        
    },
    {
        label: "Favoritos",
        icon: "star",
        route: "/favorites",        
    },
    {
        label: "Chat",
        icon: "sms",
        route: "/chat",        
    },
    {
        label: "Settings",
        icon: "tune",
        route: "/settings",        
    },
    {
        label: "Central",
        icon: "account_balance",
        route: "/central",        
    },
]