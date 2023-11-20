import type { ColumnDef, RowDef, UniqueColumn } from './types'
import TableHeader from '@/components/Table/TableHeader'
import TableBody from '@/components/Table/TableBody'

type TableProps<Model extends RowDef> = {
  rows: Model[]
  columns: ColumnDef<Model>[]
  uniqueColumn?: UniqueColumn<Model>
}

const Table = <Model extends RowDef>({
  rows,
  columns,
  uniqueColumn,
}: TableProps<Model>) => (
  <div className="w-full">
    <TableHeader columns={columns} />
    <TableBody rows={rows} uniqueColumn={uniqueColumn} />
  </div>
)

export default Table
