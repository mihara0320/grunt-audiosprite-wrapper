'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    audiosprite: {
        all: {
            files: {
                src: './sounds/*',
                dest: './output/audiosprite.json'
            },
            option: {
                output: './output/audiosprite',
                export: 'mp3',
                format: 'howler'
            },

        }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.registerTask('default', ['']);

};
