'use client'

import type { RowDef } from '@/components/Table/types'
import TableCell from '@/components/Table/TableCell'
import { useState } from 'react'
import TableRowActions from '@/components/Table/TableRowActions'

type TableRowProps<Model extends RowDef> = {
  row: Model
}

const TableRow = <Model extends RowDef>({ row }: TableRowProps<Model>) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleRowExpand = () => setIsExpanded((prev) => !prev)

  return (
    <>
      <div
        className={`${
          isExpanded
            ? 'border-transparent bg-background-light'
            : 'border-accent border-dashed'
        } relative flex w-full rounded-md border text-sm`}
      >
        {Object.entries(row).map(([key, value]) => (
          <TableCell key={key}>{value}</TableCell>
        ))}
        <span
          onClick={handleRowExpand}
          tabIndex={0}
          role="button"
          className="vertical-text absolute -right-10 top-1/2 -translate-y-1/2 transform cursor-pointer select-none text-3xl text-gray-600"
        >
          ...
        </span>
      </div>
      <TableRowActions open={isExpanded} />
    </>
  )
}

export default TableRow
