import { SearchProductsInput } from '@framework/product/use-search'
import getSortVariables from './get-sort-variables'

export const getSearchVariables = ({
  categoryId,
  brandId,
  search,
  sort,
}: SearchProductsInput) => {
  let query = ''

  if (search) {
    query += `product_type:${search} OR title:${search} OR tag:${search}`
  }

  if (categoryId) {
    query += `tag:${categoryId}`
  }

  if (brandId) {
    query += `${categoryId ? ' AND ' : ''}vendor:${brandId}`
  }

  return {
    query,
    ...getSortVariables(sort),
  }
}

export default getSearchVariables
