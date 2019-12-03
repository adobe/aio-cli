const { stdout } = require('stdout-stderr')

jest.setTimeout(3000)
jest.useFakeTimers()

const fetch = require('jest-fetch-mock')
jest.setMock('node-fetch', fetch)

// dont touch the real fs
jest.mock('fs', () => require('jest-plugin-fs/mock'))

// trap console log
beforeEach(() => { stdout.start() })
afterEach(() => { stdout.stop() })
