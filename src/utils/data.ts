export type DataDB = {
  id: Number,
  name: String,
  date: String,
  category: Array<String>,
  thumbnail: (() => Promise<any>) | null
  data: () => Promise<typeof import('*.md')>
}

export function DBDataToString (data: typeof import('*.md')): String {
  return ''
}

export function findDB (db: Array<DataDB>, id: Number): DataDB | null {
  for (let elem of db) {
    if (elem.id === id) {
      return elem
    }
  }
  return null
}
