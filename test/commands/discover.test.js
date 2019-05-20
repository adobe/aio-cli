
const testCommand = require('../../src/commands/discover')

// jest.mock('node-fetch', (url) => {
//   return {
//     'cool': 'you bet'
//   }
// })

// jest.mock('@oclif/command', () => {
//   return {
//     // note: arrow function won't work because Command is extended and called with new
//     Command: function () {},
//     run: function (cmd) {
//       return cmd
//     }
//   }
// })

describe('discover command', () => {
  test('exports a run function', async () => {
    expect(typeof testCommand.run).toEqual('function')
  })

  // test('run function returns a promise', async () => {
  //   let result = testCommand.run()
  //   expect(typeof result).toEqual('object')
  //   expect(typeof result.then).toEqual('function')
  //   expect(typeof result.catch).toEqual('function')
  // })
  
})
