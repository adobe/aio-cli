const { sortValues } = require('../src/helpers')

const now = new Date().valueOf()

const descendingDate = [
  new Date(now + 110),
  new Date(now + 100),
  new Date(now - 50),
  new Date(now - 80),
  new Date(now - 100)
]

const ascendingDate = [
  new Date(now - 100),
  new Date(now - 80),
  new Date(now - 50),
  new Date(now + 100),
  new Date(now + 110)
]

const descendingName = ['Zoltan', 'Siobhan', 'Saoirse', 'Deidre', 'Aiofe']
const ascendingName = ['Aiofe', 'Deidre', 'Saoirse', 'Siobhan', 'Zoltan']

const descendingName2 = ['Zoltan', 'Saoirse', 'Saoirse', 'Deidre', 'Aiofe'] // has a duplicate entry
const ascendingName2 = ['Aiofe', 'Deidre', 'Saoirse', 'Saoirse', 'Zoltan'] // has a duplicate entry

test('sort defaults (descending, date)', () => {
  const toSort = [
    { date: descendingDate[2] },
    { date: descendingDate[3] },
    { date: descendingDate[4] },
    { date: descendingDate[0] },
    { date: descendingDate[1] }
  ]
  sortValues(toSort)

  const expectedSort = [
    { date: descendingDate[0] },
    { date: descendingDate[1] },
    { date: descendingDate[2] },
    { date: descendingDate[3] },
    { date: descendingDate[4] }
  ]

  expect(toSort).toEqual(expectedSort)
})

test('sort defaults (ascending, date)', () => {
  const toSort = [
    { date: ascendingDate[2] },
    { date: ascendingDate[3] },
    { date: ascendingDate[4] },
    { date: ascendingDate[0] },
    { date: ascendingDate[1] }
  ]
  sortValues(toSort, { descending: false })

  const expectedSort = [
    { date: ascendingDate[0] },
    { date: ascendingDate[1] },
    { date: ascendingDate[2] },
    { date: ascendingDate[3] },
    { date: ascendingDate[4] }
  ]

  expect(toSort).toEqual(expectedSort)
})

test('sort (descending, name)', () => {
  const toSort = [
    { name: descendingName[2] },
    { name: descendingName[3] },
    { name: descendingName[4] },
    { name: descendingName[0] },
    { name: descendingName[1] }
  ]
  sortValues(toSort, { field: 'name' })

  const expectedSort = [
    { name: descendingName[0] },
    { name: descendingName[1] },
    { name: descendingName[2] },
    { name: descendingName[3] },
    { name: descendingName[4] }
  ]

  expect(toSort).toEqual(expectedSort)
})

test('sort with duplicate entry, for coverage (descending, name)', () => {
  const toSort = [
    { name: descendingName2[2] },
    { name: descendingName2[3] },
    { name: descendingName2[4] },
    { name: descendingName2[0] },
    { name: descendingName2[1] }
  ]
  sortValues(toSort, { field: 'name' })

  const expectedSort = [
    { name: descendingName2[0] },
    { name: descendingName2[1] },
    { name: descendingName2[2] },
    { name: descendingName2[3] },
    { name: descendingName2[4] }
  ]

  expect(toSort).toEqual(expectedSort)
})

test('sort with duplicate entry, for coverage (ascending, name)', () => {
  const toSort = [
    { name: ascendingName2[2] },
    { name: ascendingName2[3] },
    { name: ascendingName2[4] },
    { name: ascendingName2[0] },
    { name: ascendingName2[1] }
  ]
  sortValues(toSort, { descending: false, field: 'name' })

  const expectedSort = [
    { name: ascendingName2[0] },
    { name: ascendingName2[1] },
    { name: ascendingName2[2] },
    { name: ascendingName2[3] },
    { name: ascendingName2[4] }
  ]

  expect(toSort).toEqual(expectedSort)
})

test('sort (ascending, name)', () => {
  const toSort = [
    { name: ascendingName[2] },
    { name: ascendingName[3] },
    { name: ascendingName[4] },
    { name: ascendingName[0] },
    { name: ascendingName[1] }
  ]
  sortValues(toSort, { descending: false, field: 'name' })

  const expectedSort = [
    { name: ascendingName[0] },
    { name: ascendingName[1] },
    { name: ascendingName[2] },
    { name: ascendingName[3] },
    { name: ascendingName[4] }
  ]

  expect(toSort).toEqual(expectedSort)
})

test('sort (unknown field)', () => {
  const toSort = [
    { name: ascendingName[2] },
    { name: ascendingName[3] },
    { name: ascendingName[4] },
    { name: ascendingName[0] },
    { name: ascendingName[1] }
  ]
  sortValues(toSort, { field: 'unknown-field' })

  // unknown field, it should return the unsorted array
  const expectedSort = [
    { name: ascendingName[2] },
    { name: ascendingName[3] },
    { name: ascendingName[4] },
    { name: ascendingName[0] },
    { name: ascendingName[1] }
  ]

  expect(toSort).toEqual(expectedSort)
})
