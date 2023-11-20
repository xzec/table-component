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
  uniqueColumn?: UniqueColumn<Model>
}

export type TableContextProps<Model extends RowDef = RowDef> =
  TableProviderProps<Model> & {
    sortModel: SortModel<Model> | null
    setSortModel: Dispatch<SetStateAction<SortModel<Model> | null>>
  }
