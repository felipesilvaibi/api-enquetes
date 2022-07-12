module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.7.0',
      skipMD5: true
    },
    instance: {
      dbName: 'jest'
    },
    autoStart: false
  }
}
