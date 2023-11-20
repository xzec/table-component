import { type SetStateAction, type Dispatch } from 'react'
import type {
  ColumnDef,
  RowDef,
  SortModel,
  UniqueColumn,
} from '@/components/Table'

export type TableProviderProps<Model extends RowDef> = {
  rows: Model[]
  columns: ColumnDef<Model>[]
  defaultSortColumn: ColumnDef<Model>['field']
  uniqueColumn?: UniqueColumn<Model>
}

export type TableContextProps<Model extends RowDef = RowDef> = Omit<
  TableProviderProps<Model>,
  'defaultSortColumn'
> & {
  sortedRows: Model[]
  sortModel: SortModel<Model>
  sortByField: (field: ColumnDef<Model>['field']) => void
}
