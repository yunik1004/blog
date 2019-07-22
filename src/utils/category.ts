export type Category = {
  id: Number
  name: String
  children: Array<Category>
}

export function findCategory (categories: Array<Category>, id: Number): Array<String> {
  for (let cat of categories) {
    let res: Array<String> = findCat(cat, id)
    if (res.length > 0) {
      return res
    }
  }
  return []
}

function findCat (category: Category, id: Number): Array<String> {
  let name: String = category.name
  if (category.id === id) {
    return [name]
  }

  for (let cat of category.children) {
    let res: Array<String> = findCat(cat, id)
    if (res.length > 0) {
      res.unshift(name)
      return res
    }
  }
  return []
}
