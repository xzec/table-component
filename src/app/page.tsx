import Table from '@/components/Table'
import { columns, rows } from '@/data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table rows={rows} columns={columns} uniqueColumn="id" />
    </main>
  )
}
