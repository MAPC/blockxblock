module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'blockxblock',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
