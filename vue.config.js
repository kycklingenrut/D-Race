module.exports = {
    pwa: {
      manifestOptions: {
        background_color: '#F5A7D1'
      },
      name: 'D Race',
      themeColor: '#B963F2',
      workboxOptions: {
        runtimeCaching: [
          {
            handler: 'NetworkFirst',
            options: {
              networkTimeoutSeconds: 5
            },
            urlPattern: ''
          }
        ]
      }
    }
  }