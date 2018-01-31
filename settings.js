module.exports = {
  uiPort: process.env.PORT || 1880,
  mqttReconnectTime: 15000,
  serialReconnectTime: 15000,
  debugMaxLength: 1000,
  debugUseColors: true,
  flowFile: "flows_123.json",
  flowFilePretty: true,
  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.",
      permissions: "*"
    }]
  },
  functionGlobalContext: {
  },
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
}
