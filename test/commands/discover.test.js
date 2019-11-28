
const DiscoverCommand = require('../../src/commands/discover')

jest.mock('node-fetch', (url) => {
  const now = new Date().valueOf()
  return {
    results: [
      { package: { name: 'foo', version: '1.0.0', date: new Date(now + 100) } },
      { package: { name: 'bar', version: '1.0.1', date: new Date(now + 200) } }
    ]
  }
})

test('exports a run function', async () => {
  expect(typeof DiscoverCommand.run).toEqual('function')
})

test('discover - unknown sort field', async () => {
  expect.assertions(2)

  const runResult = DiscoverCommand.run(['--sort-field', 'unknown'])
  await expect(runResult instanceof Promise).toBeTruthy()
  await expect(runResult).rejects.toThrow('xxx') // TODO: probe for actual error
})
