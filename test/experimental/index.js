
'use strict';

require('babel-core/register')({
  plugins: ['babel-plugin-syntax-async-functions', 'babel-plugin-bluebird-async-functions']
});
require('./async');
