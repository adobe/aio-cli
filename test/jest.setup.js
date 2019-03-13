const { stdout } = require('stdout-stderr')

jest.setTimeout(3000)
jest.useFakeTimers()

// dont touch the real fs
jest.mock('fs', () => require('jest-plugin-fs/mock'))

// trap console log
beforeEach(() => { stdout.start() })
afterEach(() => { stdout.stop() })
