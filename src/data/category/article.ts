import { Category } from '~utils/category'

const category: Array<Category> = [
  {
    id: 1,
    name: 'test1',
    children: [
      {
        id: 101,
        name: 'sub1',
        children: []
      },
      {
        id: 102,
        name: 'sub2',
        children: []
      }
    ]
  },
  {
    id: 2,
    name: 'test2',
    children: []
  }
]

export default category
