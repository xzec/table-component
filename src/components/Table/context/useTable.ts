import { useContext } from 'react'
import { TableContext } from './TableContext'
import type { RowDef } from '@/components/Table'
import type { TableContextProps } from './types'

export const useTable = <Model extends RowDef>() => {
  const context = useContext(TableContext)
  if (!context) throw new Error('useTable misuse')
  return context as unknown as TableContextProps<Model>
}
