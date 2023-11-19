import type { ExtractStringKeys } from '@/types'

export type RowDef = Record<
  string,
  string | number | boolean | null | undefined
>

export type ColumnDef<
  Model extends Record<string, string | number | boolean | null | undefined>,
> = {
  field: ExtractStringKeys<Model>
  label?: string
}

export type UniqueColumn<Model> = Exclude<
  {
    [K in keyof Model]: Model[K] extends string | number ? K : never
  }[keyof Model],
  undefined
>
