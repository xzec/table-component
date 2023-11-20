import { useState, createContext, type PropsWithChildren, useMemo } from 'react'
import type { RowDef, SortModel } from '@/components/Table'
import type { TableContextProps, TableProviderProps } from './types'

export const TableContext = createContext<TableContextProps | undefined>(
  undefined
)

const TableProvider = <Model extends RowDef>({
  rows,
  columns,
  uniqueColumn,
  defaultSortColumn,
  children,
}: PropsWithChildren<TableProviderProps<Model>>) => {
  const [sortModel, setSortModel] = useState<SortModel<Model>>({
    field: defaultSortColumn,
    sort: 'asc',
  })

  const sortedRows = useMemo(() => {
    const { field, sort } = sortModel
    if (sort === null) return rows

    return [...rows].sort((row1, row2) => {
      const value1 = row1[field]
      const value2 = row2[field]
      if (
        value1 === null ||
        value1 === undefined ||
        /* eslint-disable-next-line @typescript-eslint/prefer-optional-chain */
        value2 === null ||
        value2 === undefined
      )
        return 0
      const direction = value1 > value2 ? 1 : -1
      return sort === 'asc' ? direction : -direction
    })
  }, [rows, sortModel])

  const contextValue: TableContextProps<Model> = {
    rows,
    sortedRows,
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
