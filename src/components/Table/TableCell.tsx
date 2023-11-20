import type { CellValue, RowDef } from '@/components/Table/types'

type TableCellProps<Model extends RowDef> = {
  children: CellValue<Model>
}

const TableCell = <Model extends RowDef>({
  children,
}: TableCellProps<Model>) => <div className="w-full px-6 py-6">{children}</div>

export default TableCell
