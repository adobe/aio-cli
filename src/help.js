import {Command, Help} from '@oclif/core';

export default class MyHelpClass extends Help {
  // async showCommandHelp (command) {
  //   console.log('root Display my custom showCommandHelp help! ', command)
  // }

  // formatTopic (topic) {
  //   console.log('root Display my custom topic formatTopic!')
  // }

  // formatCommand (command) {
  //   console.log('root Display my custom formatCommand help!')
  // }

  // formatFlag (flag) {
  //   console.log('root Display my custom formatFlag help!')
  // }

  async showHelp (args) {
    // remove rt and replace with runtime
    const help = new Help(this.config)
    if (args.length > 0 && args[0] === 'rt') {
      const _args = ['runtime', ...args.slice(1)]
      await help.showHelp(_args)
    } else {
      await help.showHelp(args)
    }
  }

  // showRootHelp () {
  //   console.log('root Display my custom showRootHelp help!')
  // }

  // showTopicHelp (topic) {
  //   console.log('root Display my custom showTopicHelp help! ', topic)
  // }
}