import { DataDB } from '~utils/data'

const db: Array<DataDB> = [
  {
    id: 1,
    name: 'test1',
    data: () => import('~data/contents/article/test.md')
  },
  {
    id: 2,
    name: 'test2',
    data: () => import('~data/contents/article/test.md')
  }
]

export default db
