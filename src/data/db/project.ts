import { DataDB } from '~utils/data'

const db: Array<DataDB> = [
  {
    id: 1,
    name: 'test1',
    date: '2019-06-22',
    category: [],
    thumbnail: () => import('~assets/image/logo.png'),
    data: () => import('~data/contents/project/test.md')
  },
  {
    id: 2,
    name: 'test2',
    date: '2019-06-21',
    category: [],
    thumbnail: () => import('~assets/image/logo.png'),
    data: () => import('~data/contents/project/test.md')
  }
]

export default db
