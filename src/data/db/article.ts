import { DataDB } from '~utils/data'

const db: Array<DataDB> = [
  {
    id: 1,
    name: 'test1',
    date: '2019-06-22',
    thumbnail: null,
    data: () => import('~data/contents/article/test.md')
  },
  {
    id: 2,
    name: 'test2',
    date: '2019-06-21',
    thumbnail: null,
    data: () => import('~data/contents/article/test.md')
  }
]

export default db
