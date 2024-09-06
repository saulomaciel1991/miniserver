module.exports = {
  apps: [
    {
      name: 'my-app',
      script: '../dist/server.js',
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
      'pre-deploy': 'rm -rf /var/www/my-app/source && git clone git@github.com:saulomaciel1991/miniserver.git /var/www/my-app/source',
      'post-deploy': 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" && ' +
                     '[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" && ' +
                     'nvm use 20.17.0 && ' +
                     'cd /var/www/my-app/source && ' +
                     'npm install && ' +
                     'pm2 reload ecosystem.config.js --env production'
    }
  }
};
