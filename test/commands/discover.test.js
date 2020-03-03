
const fetch = require('node-fetch')
const inquirer = require('inquirer')
const TheCommand = require('../../src/commands/discover')
const { stdout } = require('stdout-stderr')

jest.mock('inquirer')

let command

beforeEach(() => {
  fetch.resetMocks()
  command = new TheCommand([])
  command.config = {
    commands: [{ pluginName: 'baz' }],
    runCommand: jest.fn()
  }
})

test('exports a run function', async () => {
  expect(typeof TheCommand.run).toEqual('function')
})

test('unknown sort-field', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    results: []
  }))

  command.argv = ['--sort-field', 'unknown']

  return new Promise((resolve, reject) => {
    return command.run()
      .then(() => {
        reject(new Error('it should not succeed'))
      })
      .catch(error => {
        expect(error).toEqual(new Error('Expected --sort-field=unknown to be one of: date, name\nSee more help with --help'))
        resolve()
      })
  })
})

test('name sort-field, ascending', async () => {
  const genesis = new Date(86400000)
  const dayAfter = new Date(genesis.valueOf() + 86400000)

  const expectedResult = {
    results: [
      { package: { scope: 'adobe', name: 'foo', description: 'some foo', version: '1.0.0', date: genesis } },
      { package: { scope: 'adobe', name: 'bar', description: 'some bar', version: '1.0.1', date: dayAfter } }
    ]
  }
  fetch.mockResponseOnce(JSON.stringify(expectedResult))

  command.argv = ['--sort-field', 'name', '--sort-order', 'asc']

  return new Promise(resolve => {
    return command.run()
      .then(() => {
        expect(stdout.output).toMatch(
          // TODO: add .toMatchFixture
          // eslint-disable-next-line indent
`Name Version   Description Published       
bar  1.0.1     some bar    January 2, 1970 
foo  1.0.0     some foo    January 1, 1970 
`
        )
        resolve()
      })
  })
})

test('interactive install', async () => {
  const now = new Date()
  const tomorrow = new Date(now.valueOf() + 86400000)
  const dayAfter = new Date(tomorrow.valueOf() + 86400000)

  const expectedResult = {
    results: [
      { package: { scope: 'adobe', name: 'foo', description: 'some foo', version: '1.0.0', date: now } },
      { package: { scope: 'adobe', name: 'bar', description: 'some bar', version: '1.0.1', date: tomorrow } },
      { package: { scope: 'adobe', name: 'baz', description: 'some baz', version: '1.0.2', date: dayAfter } }
    ]
  }
  fetch.mockResponseOnce(JSON.stringify(expectedResult))

  command.argv = ['-i']
  inquirer.prompt = jest.fn().mockResolvedValue({
    plugins: ['bar', 'foo']
  })

  return new Promise(resolve => {
    return command.run()
      .then((result) => {
        expect(result).toEqual(['bar', 'foo'])
        const arg = inquirer.prompt.mock.calls[0][0] // first arg of first call
        expect(arg[0].choices.map(elem => elem.value)).toEqual(['bar', 'foo']) // baz was an existing plugin, filtered out
        resolve()
      })
  })
})

test('interactive install - no choices', async () => {
  const now = new Date()

  const expectedResult = {
    results: [
      { package: { scope: 'adobe', name: 'baz', description: 'some baz', version: '1.0.2', date: now } }
    ]
  }
  fetch.mockResponseOnce(JSON.stringify(expectedResult))

  command.argv = ['-i']
  inquirer.prompt = jest.fn().mockResolvedValue({
    plugins: []
  })

  return new Promise(resolve => {
    return command.run()
      .then((result) => {
        expect(result).toEqual([])
        resolve()
      })
  })
})

test('json result error', async () => {
  const expectedResult = {
  }
  fetch.mockResponseOnce(JSON.stringify(expectedResult))

  command.argv = []

  return new Promise((resolve, reject) => {
    return command.run()
      .then(() => {
        reject(new Error('this should not succeed'))
      })
      .catch((error) => {
        expect(error.message).toMatch('Oops:')
        resolve()
      })
  })
})
