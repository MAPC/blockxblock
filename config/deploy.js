/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {
      environment: deployTarget,
    },

    'revision-data': {
      type: 'git-commit',
    },
  };

  if (deployTarget === 'staging') {
    ENV.rsync = {
      dest: 'blockxblock@prep.mapc.org:/var/www/blockxblock',
      delete: false,
    };
  }

  if (deployTarget === 'production') {
    ENV.rsync = {
      dest: 'blockxblock@live.mapc.org:/var/www/blockxblock',
      delete: false,
    };
  }

  return ENV;
};
