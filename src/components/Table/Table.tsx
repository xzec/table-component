'use client'

import type { ColumnDef, RowDef, UniqueColumn } from './types'
import TableHeader from '@/components/Table/TableHeader'
import TableBody from '@/components/Table/TableBody'
import TableProvider from '@/components/Table/context'

type TableProps<Model extends RowDef> = {
  rows: Model[]
  columns: ColumnDef<Model>[]
  defaultSortColumn: ColumnDef<Model>['field']
  uniqueColumn?: UniqueColumn<Model>
}

const Table = <Model extends RowDef>(props: TableProps<Model>) => (
  <TableProvider {...props}>
    <div className="w-full">
      <TableHeader />
      <TableBody />
    </div>
  </TableProvider>
)

export default Table
