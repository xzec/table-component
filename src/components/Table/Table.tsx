import type { ColumnDef, RowDef, UniqueColumn } from './types'

type TableProps<Model extends RowDef> = {
  rows: Model[]
  columns: ColumnDef<Model>[]
  uniqueColumn?: UniqueColumn<Model>
}

const Table = <Model extends RowDef>({
  rows,
  columns,
  uniqueColumn,
}: TableProps<Model>) => {
  return (
    <table className="w-full">
      <thead className="flex w-full p-1 py-2 text-sm text-gray-500">
        <tr className="flex w-full">
          {columns.map(({ field, label }) => (
            <th key={field} className="w-full px-6 text-left">
              {typeof label === 'string' && label.length > 0 ? label : field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex flex-col gap-2">
        {rows.map((row, index) => (
          <tr
            key={uniqueColumn ? String(row[uniqueColumn]) : index}
            className="flex w-full rounded-md bg-background-light text-sm"
          >
            {Object.entries(row).map(([key, value]) => {
              return (
                <td key={key} className="w-full px-6 py-6">
                  {value}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
