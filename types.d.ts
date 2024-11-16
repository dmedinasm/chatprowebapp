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

interface Message {
    incoming: boolean;
    author: string;
    timestamp: string;
    read_recipt: boolean;
    content: string;
}

export type { ChatItem, SideMenuItem, Message }
