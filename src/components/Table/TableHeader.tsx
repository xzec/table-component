import type { ColumnDef, RowDef } from './types'

type TableHeaderProps<Model extends RowDef> = {
  columns: ColumnDef<Model>[]
}

const TableHeader = <Model extends RowDef>({
  columns,
}: TableHeaderProps<Model>) => (
  <div className="flex w-full p-1 py-2 text-sm text-gray-500">
    <div className="flex w-full">
      {columns.map(({ field, label }) => (
        <div key={field} className="w-full px-6 text-left">
          {typeof label === 'string' && label.length > 0 ? label : field}
        </div>
      ))}
    </div>
  </div>
)

export default TableHeader
