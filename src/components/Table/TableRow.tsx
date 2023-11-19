import type { RowDef } from '@/components/Table/types'
import TableCell from '@/components/Table/TableCell'

type TableRowProps<Model extends RowDef> = {
  row: Model
}

const TableRow = <Model extends RowDef>({ row }: TableRowProps<Model>) => (
  <tr className="flex w-full rounded-md bg-background-light text-sm">
    {Object.entries(row).map(([key, value]) => (
      <TableCell key={key}>{value}</TableCell>
    ))}
  </tr>
)

export default TableRow
