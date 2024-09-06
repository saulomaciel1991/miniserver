module.exports = {
  apps: [
    {
      name: 'my-app',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:saulomaciel1991/miniserver.git',
      path: '/var/www/my-app',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
