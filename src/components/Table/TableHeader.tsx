import type { FC } from 'react'
import type { RowDef } from './types'
import { useTable } from '@/components/Table/context'
import TableHeaderCell from '@/components/Table/TableHeaderCell'

const TableHeader: FC = <Model extends RowDef>() => {
  const { columns } = useTable<Model>()

  return (
    <div className="flex w-full p-1 py-2 text-sm text-gray-500">
      <div className="flex w-full">
        {columns.map((column) => (
          <TableHeaderCell key={column.field} column={column} />
        ))}
      </div>
    </div>
  )
}

export default TableHeader
