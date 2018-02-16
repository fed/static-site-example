module.exports = {
  compile: {
    options: {
      baseUrl: '.',
      mainConfigFile: 'src/main.js',
      include: ['node_modules/requirejs/require.js', 'src/main.js'],
      optimize: 'uglify',
      generateSourceMaps: true,
      out: 'build/app.min.js'
    }
  }
};
