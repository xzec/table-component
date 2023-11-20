import type { ExtractStringKeys } from '@/types'

export type RowDef = Record<
  string,
  string | number | boolean | null | undefined
>

export type ColumnDef<Model extends RowDef> = {
  field: ExtractStringKeys<Model>
  label?: string
}

export type UniqueColumn<Model> = Exclude<
  {
    [K in keyof Model]: Model[K] extends string | number ? K : never
  }[keyof Model],
  undefined
>

export type CellValue<T extends RowDef> = T[keyof T]

export type SortModel<Model extends RowDef> = {
  field: ExtractStringKeys<Model>
  sort: 'asc' | 'desc' | null
}
