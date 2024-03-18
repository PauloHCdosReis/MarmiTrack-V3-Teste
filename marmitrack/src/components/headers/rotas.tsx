import {
  Beef,
  CookingPot,
  UtensilsCrossed,
  Scale,
  NotebookTabs,
  ScrollText,
  Contact,
  Users,
  ClipboardList,
  UserCog,
} from 'lucide-react'

type rotasType = {
  rota: string
  text: string
  icon: JSX.Element
}

export type HeadersType = {
  roles: Array<'COMMON_USER' | 'MANAGER' | 'ADMIN'>
}

export const rotasAdmin: rotasType[] = [
  {
    rota: '/admin/mistura',
    text: 'Mistura',
    icon: <Beef />,
  },
  {
    rota: '/admin/acompanhamento',
    text: 'Acompanhamento',
    icon: <CookingPot />,
  },
  {
    rota: '/admin/restaurante',
    text: 'Restaurante',
    icon: <UtensilsCrossed />,
  },
  {
    rota: '/admin/tamanho',
    text: 'Tamanho',
    icon: <Scale />,
  },
  {
    rota: '/admin/pedido',
    text: 'Pedido',
    icon: <NotebookTabs />,
  },
  {
    rota: '/admin/cardapio',
    text: 'Cardápio',
    icon: <ScrollText />,
  },
  {
    rota: '/admin/grupos',
    text: 'Grupos',
    icon: <Contact />,
  },
  {
    rota: '/admin/usuarios',
    text: 'Usuários',
    icon: <Users />,
  },
]

export const rotasCommon: rotasType[] = [
  {
    rota: '/user/meuspedidos',
    text: 'Meus Pedidos',
    icon: <ClipboardList />,
  },
  {
    rota: '/user/perfil',
    text: 'Perfil',
    icon: <UserCog />,
  },
]
