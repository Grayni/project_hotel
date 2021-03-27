module.exports = {
  apps : [{
    name: 'urzhum',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start',
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: "production",
      PORT: 3000,
      HOST: 'localhost'
    }
  }]
};
