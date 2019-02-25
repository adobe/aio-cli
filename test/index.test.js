
const testCommand = require('../src/index')
// const { stdout } = require('stdout-stderr')


jest.mock('@oclif/config', () => {
  return {
    "load": () => {
      return {
        "findCommand": (cmd) => {
          return [ "a", "a:b", "a:b:c", "a:b:c:d"].indexOf(cmd) > -1
        }
      }
    }
  }
})

jest.mock('@oclif/command', () => {
  return {
    run: function (cmd) {
      return cmd
    }
  }
})

describe('run command', () => {

  test('index exports a run function', async () => {
    expect(typeof testCommand.run).toEqual('function')
  })

  test('run function returns a promise', async () => {
    let result = testCommand.run(['a'])
    expect(typeof result).toEqual('object')
    expect(typeof result.then).toEqual('function')
    expect(typeof result.catch).toEqual('function')
  })

  test('run using process.argv', async () => {
      let temp = process.argv
      process.argv = [0,0,'a']
      let result = await testCommand.run()
      expect(result[0]).toEqual('a')
      process.argv = temp;
  })


  test('run function properly reforms args', async () => {

    let result = await testCommand.run(['a','c','d'])
    expect(result[0]).toEqual('a')

    // [a,b,c,d] => a:b:c:d
    result = await testCommand.run(['a','b','c','d'])
    expect(result[0]).toEqual('a:b:c:d')

    // [a,b,c,-f,d] => a:b:c -f d
    result = await testCommand.run(['a','b','c','-f','d'])
    expect(result[0]).toEqual('a:b:c')

    // [a:b, c:d] => a:b:c:d
    result = await testCommand.run(['a:b','c:d'])
    expect(result[0]).toEqual('a:b:c:d')

    // [a:b:c:d] => a:b:c:d
    result = await testCommand.run(['a:b:c:d'])
    expect(result[0]).toEqual('a:b:c:d')

    // [a:b:c, d] => a:b:c:d
    result = await testCommand.run(['a:b:c','d'])
    expect(result[0]).toEqual('a:b:c:d')

    // [a b:c:d] => a:b:c:d
    result = await testCommand.run(['a','b:c:d'])
    expect(result[0]).toEqual('a:b:c:d')
  })

})





