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
  { id: 'cursor', label: '클릭', icon: <CursorIcon className='size-14' /> },
  { id: 'hand', label: '잡기', icon: <HandIcon className='h-sm w-18' /> },
  { id: 'reset', label: '초기화', icon: <ResetIcon className='size-sm' /> },
  {
    id: 'fullscreen',
    label: '화면 채움',
    icon: <FullscreenIcon className='size-sm' />,
  },
  { id: 'scale', label: '크기 조정', icon: <ScaleIcon className='size-xs' /> },
  {
    id: 'local',
    label: '위치 조정',
    icon: <LocalIcon className='size-18' />,
  },
]
