module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Watching for changes
    watch: {
      css: {
        files: 'assets/sass/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/sass',
          src: ['**/*.scss'],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    }
  });

  // Tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass']);

};
