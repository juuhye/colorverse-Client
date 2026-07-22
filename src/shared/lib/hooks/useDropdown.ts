import { RefObject, useEffect, useRef, useState } from 'react'

export function useDropdown<T extends HTMLElement = HTMLElement>(): {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  ref: RefObject<T | null>
} {
  // DropdownPanel 열림/ 닫힘 상태
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((prev) => !prev)

  //   DropdownPanel 영역
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!isOpen) return

    // DropdownPanel 영역을 제외한 영역 클릭 시 발생 이벤트
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close()
    }
    // esc 클릭 시 발생 이벤트
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    // clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return { isOpen, open, close, toggle, ref }
}
