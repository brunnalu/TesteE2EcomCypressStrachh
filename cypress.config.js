const { defineConfig } = require('cypress')
const MailosaurClient = require('mailosaur')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      const mailosaur = new MailosaurClient(config.env.MAILOSAUR_API_KEY)

      on('task', {
        async getConfirmationEmail({ serverId, emailAddress, receivedAfter }) {
          return await mailosaur.messages.get(serverId, {
            sentTo: emailAddress,
            receivedAfter: new Date(receivedAfter)
          })
        }
      })

      return config
    },
    baseUrl: 'https://notes-serverless-app.com/', 
    specPattern: 'cypress/e2e/**/*.cy.js',
    env: {
  viewportWidthBreakpoint: 768,
},

  }


})


