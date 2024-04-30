const path = require('path');

module.exports = {
  reactStrictMode: true, // if true, it runs everything twice to detect side effects
  poweredByHeader: false,
  compress: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['kangurus.com'],
  },
};
