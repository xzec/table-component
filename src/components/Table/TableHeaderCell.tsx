import type { ColumnDef, RowDef } from './types'
import { useTable } from '@/components/Table/context'

type TableHeaderCellProps<Model extends RowDef> = {
  column: ColumnDef<Model>
}

const TableHeaderCell = <Model extends RowDef>({
  column: { field, label },
}: TableHeaderCellProps<Model>) => {
  const { sortModel, sortByField } = useTable<Model>()

  return (
    <div key={field} className="w-full px-6 text-left">
      <span
        tabIndex={0}
        role="button"
        onClick={() => sortByField(field)}
        className={`select-none ${
          sortModel.sort !== null && sortModel.field === field
            ? 'text-white'
            : ''
        }`}
      >
        {typeof label === 'string' && label.length > 0 ? label : field}
        {sortModel.sort !== null && sortModel.field === field
          ? ` (${sortModel.sort})`
          : null}
      </span>
    </div>
  )
}

export default TableHeaderCell
