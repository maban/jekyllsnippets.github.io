module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
    * Set project info
    */
   project: {
     src: '_src',
     skin: 'assets/css',
     css: [
       '<%= project.src %>/scss/style.scss'
     ],
     js: [
       '<%= project.src %>/js/*.js'
     ]
   },


    compass: {
     dev: {
       options: {
         sassDir: '<%= project.src %>/css',
         cssDir: '<%= project.skin %>',
         watch: true
       }
     }
     },

    watch: {
        scripts: {
          files: '<% project.src %>/js/*.js',
          tasks: 'uglify'
        }
    },

    /*    
      * Use different blocking tasks at the same time
    */
    concurrent: {
      target1: ['compass', 'uglify', 'watch'],
      options: {
        logConcurrentOutput: true
      }
   },

    uglify: {
        my_targets: {
          files: {
            'assets/js/main.min.js': '_src/js/*.js'
          }      
        }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-contrib-compass'); 
  grunt.loadNpmTasks('grunt-concurrent'); 
  grunt.loadNpmTasks('grunt-contrib-uglify');  

  grunt.registerTask('default', 'concurrent');
  // grunt.registerTask('predeploy', 'uglify');
};