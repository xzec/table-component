import { useState, createContext, type PropsWithChildren } from 'react'
import type { RowDef, SortModel } from '@/components/Table'
import type { TableContextProps, TableProviderProps } from './types'

export const TableContext = createContext<TableContextProps | undefined>(
  undefined
)

const TableProvider = <Model extends RowDef>({
  rows,
  columns,
  uniqueColumn,
  children,
}: PropsWithChildren<TableProviderProps<Model>>) => {
  const [sortModel, setSortModel] = useState<SortModel<Model> | null>(null)

  const contextValue: TableContextProps<Model> = {
    rows,
    columns,
    uniqueColumn,
    sortModel,
    setSortModel,
  }

  return (
    // @ts-expect-error fix type mismatch
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  )
}

export default TableProvider
