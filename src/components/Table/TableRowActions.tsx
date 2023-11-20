import { type FC } from 'react'

type TableRowActionsProps = {
  open: boolean
}

const TableRowActions: FC<TableRowActionsProps> = ({ open }) => {
  if (!open) return null

  return (
    <div className="-mt-2 flex w-11/12 justify-center gap-8 self-center rounded-b-md bg-background-dark p-6 text-xs">
      <span>Activate</span>
      <span>Preview</span>
      <span>Edit</span>
      <span>Stats</span>
      <span>Delete</span>
    </div>
  )
}

export default TableRowActions
