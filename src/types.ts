export type ExtractStringKeys<T> = Extract<keyof T, string>

export type Car = {
  id: string
  make: string
  model?: string | null
  year?: number | null
}
