import type { LucideIcon } from 'lucide-react'

interface ChatItem {
    imgSrc: string;
    name: string;
    message: string;
}
interface SideMenuItem{
    key:number;
    title:string;
    icon:LucideIcon;
}

export type { ChatItem, SideMenuItem }
