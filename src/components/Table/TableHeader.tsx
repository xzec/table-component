import type { ColumnDef, RowDef } from './types'

type TableHeaderProps<Model extends RowDef> = {
  columns: ColumnDef<Model>[]
}

const TableHeader = <Model extends RowDef>({
  columns,
}: TableHeaderProps<Model>) => (
  <thead className="flex w-full p-1 py-2 text-sm text-gray-500">
    <tr className="flex w-full">
      {columns.map(({ field, label }) => (
        <th key={field} className="w-full px-6 text-left">
          {typeof label === 'string' && label.length > 0 ? label : field}
        </th>
      ))}
    </tr>
  </thead>
)

export default TableHeader
