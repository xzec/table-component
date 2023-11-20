import type { FC } from 'react'
import type { ColumnDef, RowDef } from './types'
import { useTable } from '@/components/Table/context'

const TableHeader: FC = <Model extends RowDef>() => {
  const { columns, sortModel, setSortModel } = useTable<Model>()

  const handleSortChange = (field: ColumnDef<Model>['field']) =>
    setSortModel({
      field,
      sort: sortModel?.sort === 'asc' ? 'desc' : 'asc',
    })

  return (
    <div className="flex w-full p-1 py-2 text-sm text-gray-500">
      <div className="flex w-full">
        {columns.map(({ field, label }) => (
          <div key={field} className="w-full px-6 text-left">
            <span
              tabIndex={0}
              role="button"
              onClick={() => handleSortChange(field)}
              className="select-none"
            >
              {typeof label === 'string' && label.length > 0 ? label : field}
            </span>
            {sortModel?.field === field ? sortModel.sort : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableHeader
