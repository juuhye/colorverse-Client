interface shortcutKeyOption {
  label: string
  shortcut: string
}

export const SHORTCUTKEY_OPTIONS: shortcutKeyOption[] = [
  { label: '아이템 정보', shortcut: 'Ctrl+I' },
  { label: '새로 만들기', shortcut: 'Ctrl+N' },
  { label: '아이템 불러오기', shortcut: 'Ctrl+O' },
  { label: '아이템 저장', shortcut: 'Ctrl+S' },
  { label: '편집 중인 아이템 저장', shortcut: 'Ctrl+Shift+S' },
]
