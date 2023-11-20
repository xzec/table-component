import type { RowDef } from '@/components/Table/types'
import type { UniqueColumn } from '@/components/Table/types'
import TableRow from '@/components/Table/TableRow'

type TableBodyProps<Model extends RowDef> = {
  rows: Model[]
  uniqueColumn?: UniqueColumn<Model>
}

const TableBody = <Model extends RowDef>({
  rows,
  uniqueColumn,
}: TableBodyProps<Model>) => (
  <div className="flex flex-col gap-2">
    {rows.map((row, index) => (
      <TableRow
        key={uniqueColumn !== undefined ? String(row[uniqueColumn]) : index}
        row={row}
      />
    ))}
  </div>
)

export default TableBody
