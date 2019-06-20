export type DataDB = {
  id: Number,
  name: String,
  data: () => Promise<{
    default: typeof import("*.md")
    content: string
  }>
}

export function findDB (db: Array<DataDB>, id: Number): DataDB | null {
  for (var elem of db) {
    if (elem.id === id) {
      return elem
    }
  }
  return null
}
