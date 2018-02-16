require.config({
  baseUrl: '.',
  paths: {
    app: './src/app'
  }
});

requirejs(['app'], function (App) {
  new App();
});
