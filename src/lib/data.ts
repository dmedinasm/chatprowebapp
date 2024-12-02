import { ChatItem, MediaMessageImage, SideMenuItem } from '../../types'
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

export const images : MediaMessageImage[] = [
  {
    key: 0,
    imgSrc: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    key: 1,
    imgSrc: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    key: 2,
    imgSrc: 'https://images.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    key: 3,
    imgSrc: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },

  {
    key: 4,
    imgSrc: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]
