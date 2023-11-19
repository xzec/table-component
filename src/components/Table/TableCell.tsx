import type { CellValue, RowDef } from '@/components/Table/types'

type TableCellProps<Model extends RowDef> = {
  children: CellValue<Model>
}

const TableCell = <Model extends RowDef>({
  children,
}: TableCellProps<Model>) => <td className="w-full px-6 py-6">{children}</td>

export default TableCell
