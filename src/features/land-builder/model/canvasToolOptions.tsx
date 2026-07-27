import { ReactNode } from 'react'
import CursorIcon from '../assets/cursor-icon.svg'
import HandIcon from '../assets/hand-icon.svg'
import ResetIcon from '../assets/reset-icon.svg'
import FullscreenIcon from '../assets/fullscreen-icon.svg'
import ScaleIcon from '../assets/scale-icon.svg'
import LocalIcon from '../assets/local-icon.svg'

export type CanvasToolId =
  | 'cursor'
  | 'hand'
  | 'reset'
  | 'fullscreen'
  | 'scale'
  | 'local'

export interface CanvasToolOption {
  id: CanvasToolId
  label: string
  icon: ReactNode
}

export const CANVAS_TOOL_OPTION: CanvasToolOption[] = [
  { id: 'cursor', label: 'Cursor', icon: <CursorIcon className='size-14' /> },
  { id: 'hand', label: 'Hand', icon: <HandIcon className='h-sm w-18' /> },
  { id: 'reset', label: 'Reset', icon: <ResetIcon className='size-sm' /> },
  {
    id: 'fullscreen',
    label: 'Fullscreen',
    icon: <FullscreenIcon className='size-sm' />,
  },
  { id: 'scale', label: 'Scale', icon: <ScaleIcon className='size-xs' /> },
  {
    id: 'local',
    label: 'Local',
    icon: <LocalIcon className='size-18' />,
  },
]
