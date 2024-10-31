import { ChatItem, SideMenuItem } from '../../types'
import { MessageSquare, Users, CircleUserRound, CircleEllipsis } from 'lucide-react'
export const list: ChatItem[] = [
  {
    imgSrc: '/user/user-01.png',
    name: 'Henry Dholi',
    message: 'I cam across your profile and...'
  },
  {
    imgSrc: '/user/user-02.png',
    name: 'Mariya Desoja',
    message: 'I like your confidence 💪'
  },
  {
    imgSrc: '/user/user-03.png',
    name: 'Robert Jhon',
    message: 'Can you share your offer?'
  },
  {
    imgSrc: '/user/user-04.png',
    name: 'Cody Fisher',
    message: 'I\'m waiting for you response!'
  },
  {
    imgSrc: '/user/user-05.png',
    name: 'Jenny Wilson',
    message: 'I cam across your profile and...'
  },
  {
    imgSrc: '/user/user-06.png',
    name: 'Robert Jhon',
    message: 'Can you share your offer?'
  },
  {
    imgSrc: '/user/user-07.png',
    name: 'Cody Fisher',
    message: 'I\'m waiting for you response!'
  },
  {
    imgSrc: '/user/user-08.png',
    name: 'Jenny Wilson',
    message: 'I cam across your profile and...'
  }
]

export const navigation: SideMenuItem[] = [
  {
    key: 0,
    title: 'DMs',
    icon: MessageSquare
  },
  {
    key: 1,
    title: 'Groups',
    icon: Users
  },
  {
    key: 2,
    title: 'Profile',
    icon: CircleUserRound
  },
  {
    key: 3,
    title: 'More',
    icon: CircleEllipsis
  }
]
