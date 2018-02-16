module.exports = {
  configFiles: {
    files: ['Gruntfile.js', 'grunt/{,**/}*.{js,json,yml}'],
    options: {
      reload: true
    }
  },
  js: {
    files: [
      'src/{,**/}*.js'
    ],
    options: {
      livereload: true
    },
    tasks: ['build:js'],
  },
  css: {
    files: [
      'src/{,**/}*.scss'
    ],
    options: {
      livereload: true
    },
    tasks: ['build:css'],
  },
  assets: {
    files: [
      'public/{,**/}*'
    ],
    options: {
      livereload: true
    },
    tasks: ['build:assets'],
  }
};
