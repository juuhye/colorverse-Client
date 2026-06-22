import { useState } from 'react'

export function useControllableState<T>({
  prop,
  defaultProp,
  onChange,
}: {
  prop?: T
  defaultProp?: T
  onChange?: (value: T) => void
}) {
  // uncontrolled일 때 사용할 내부 상태. defaultProp을 초기값으로 사용
  const [internalState, setInternalState] = useState(defaultProp)

  // false도 유효한 값이므로 !prop 대신 !== undefined로 판단
  const isControlled = prop !== undefined

  // controlled면 부모가 준 prop, uncontrolled면 내부 state 사용
  const value = isControlled ? prop : internalState

  const setValue = (nextValue: T) => {
    // uncontrolled일 때만 내부 state 변경 (controlled면 부모가 prop을 바꿔줌)
    if (!isControlled) {
      setInternalState(nextValue)
    }
    // controlled/uncontrolled 관계없이 부모에게 변경 사실을 알림
    onChange?.(nextValue)
  }

  return [value, setValue] as const
}
