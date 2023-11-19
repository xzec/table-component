import type { Car } from '@/types'
import type { ColumnDef } from '@/components/Table'

export const rows: Car[] = [
  { id: '1', make: 'Honda', model: 'Civic', year: 2020 },
  { id: '2', make: 'Tesla', model: 'Model S', year: 2021 },
  { id: '3', make: 'Ford', model: 'Mustang', year: 2019 },
  { id: '4', make: 'Toyota', model: 'Corolla', year: 2018 },
  { id: '5', make: 'Dodge', model: 'Charger', year: null },
  { id: '6', make: 'Chevrolet', model: null, year: 1969 },
  { id: '7', make: 'Subaru', model: 'Impreza', year: 2022 },
  { id: '8', make: 'Mazda', model: 'Miata', year: 2017 },
  { id: '9', make: 'Porsche', model: '911', year: 2023 },
]

export const columns: ColumnDef<Car>[] = [
  {
    field: 'id',
    label: 'ID',
  },
  {
    field: 'make',
    label: 'Make',
  },
  {
    field: 'model',
    label: 'Model',
  },
  {
    field: 'year',
    label: 'Year',
  },
]
