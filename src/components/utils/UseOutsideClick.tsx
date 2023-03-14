import { useEffect, useRef } from 'react'

interface useOutSideClickProps {
  onOutsideClick: () => void
  children: React.ReactNode
}

export const UseOutsideClick: React.FC<useOutSideClickProps> = ({
  onOutsideClick,
  children,
}) => {
  const menuRef = useRef<any>()
  useEffect(() => {
    const handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])
  return <div ref={menuRef}>{children}</div>
}
