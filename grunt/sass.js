module.exports = {
  options: {
    sourceMap: true,
    outputStyle: 'compressed'
  },
  build: {
    files: {
      'build/app.min.css': 'src/app.scss'
    }
  }
};
