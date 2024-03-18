export type Page = {
  size: number
  totalElements: number
  totalPages: number
  number: number
}

export type Links = {
  first?: {
    href: string
  }
  prev?: {
    href: string
  }
  self: {
    href: string
  }
  next?: {
    href: string
  }
  last?: {
    href: string
  }
}

export type MainDishe = {
  ID: number
  Description: string
  Active: boolean
  _links: {
    self: {
      href: string
    }
  }
}

export type MainsDishesType = {
  _embedded?: {
    MainsDishes?: MainDishe[]
  }
  _links: Links
  page: Page
}
