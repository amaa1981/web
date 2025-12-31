export interface NavigationItem {
  name: string
  href: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: {
    line1: string
    line2: string
  }
}

export interface Feature {
  name: string
  description: string
  icon: React.ReactNode,
}

export interface FAQ {
  question: string
  answer: string | React.ReactNode
}

export interface Stat {
  name: string
  value: string
}