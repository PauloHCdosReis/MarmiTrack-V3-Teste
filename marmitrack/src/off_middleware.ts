import { Session } from 'inspector'
import { NextRequest, NextResponse } from 'next/server'

const paginasPublicas = ['/login', '/cadastro', '/esquecisenha']

const paginasPrivadas = [
  '/',
  '/sair',
  '/refreshtoken',
  '/trocarsenha',
  '/user/meuspedidos',
  '/user/perfil',
  '/admin/mistura',
  '/admin/acompanhamento',
  '/admin/restaurante',
  '/admin/tamanho',
  '/admin/pedido',
  '/admin/cardapio',
  '/admin/grupos',
  '/admin/usuarios',
]

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const token = req.cookies.get('AccessToken')?.value || null

  // logica para authenticação
  if (!token && paginasPrivadas.includes(path)) {
    return NextResponse.redirect(new URL('/login', req.url))
  } else if (token && paginasPublicas.includes(path)) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}
