import { ReactNode } from 'react'
import LandIcon from '../assets/land-icon.svg'
import ItemIcon from '../assets/item-icon.svg'
import AssetsIcon from '../assets/assets-icon.svg'

export interface BuilderOption {
  label: string
  icon: ReactNode
}

export const BUILDER_OPTION: BuilderOption[] = [
  { label: '랜드 빌더', icon: <LandIcon /> },
  { label: '아이템 빌더', icon: <ItemIcon /> },
  { label: '에셋 빌더', icon: <AssetsIcon /> },
]
