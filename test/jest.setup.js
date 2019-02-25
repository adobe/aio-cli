const { stdout } = require('stdout-stderr')
const fs = require.requireActual('fs')

jest.setTimeout(3000)
jest.useFakeTimers()

 // dont touch the real fs
jest.mock('fs', () => require('jest-plugin-fs/mock'))


 // trap console log
beforeEach(() => { stdout.start() })
afterEach(() => { stdout.stop() })