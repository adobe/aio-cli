/**
 * Sort array values according to the sort order and/or sort-field.
 *
 * Note that this will use the Javascript sort() function, thus the values will
 * be sorted in-place.
 *
 * @param {array} values array of objects (with fields to sort by)
 * @param {object} [options]
 * @param {boolean} [options.descending] true by default, sort order
 * @param {string} [options.field] 'date' by default, sort field ('name', 'date' options)
 */
function sortValues (values, { descending = true, field = 'date' } = {}) {
  const supportedFields = ['name', 'date']
  if (!supportedFields.includes(field)) { // unknown field, we just return the array
    return values
  }

  values.sort((left, right) => {
    const d1 = left[field]
    const d2 = right[field]

    if (descending) {
      return (d1 > d2) ? -1 : (d1 < d2) ? 1 : 0
    } else {
      return (d1 > d2) ? 1 : (d1 < d2) ? -1 : 0
    }
  })
  return values
}

module.exports = {
  sortValues
}
