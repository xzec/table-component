import type { FC } from 'react'
import type { RowDef } from '@/components/Table/types'
import TableRow from '@/components/Table/TableRow'
import { useTable } from './context'

const TableBody: FC = <Model extends RowDef>() => {
  const { rows, uniqueColumn } = useTable<Model>()

  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, index) => (
        <TableRow
          key={uniqueColumn !== undefined ? String(row[uniqueColumn]) : index}
          row={row}
        />
      ))}
    </div>
  )
}

export default TableBody
