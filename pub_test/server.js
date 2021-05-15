const { createUpwardServer } = require('@magento/upward-js');

async function serve() {
  await createUpwardServer({
    port: 3000,
    bindLocal: true,
    logUrl: true,
    upwardPath: './upward.yml',
    env: {
      MAGENTO_BACKEND_URL: 'example.com',
      NODE_ENV: 'production'
    }
  });
}

serve();