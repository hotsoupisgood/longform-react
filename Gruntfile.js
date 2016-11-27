module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // concat: {
        //     build: {
        //         src: ['js/*.js','js/*.jsx', 'main.js'],
        //         dest: 'bundle-x.js'
        //     }
        // },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'bundle.css': 'scss/main.scss'
                }
            }
        },
        exec: {
            echo_something: 'webpack'
        },
        watch: {
            scripts: {
                files: ['js/*.js', 'js/*.jsx', 'scss/*.scss'],
                // tasks: ['sass', 'concat', 'exec'],
                tasks: ['sass', 'exec'],
                options: {
                    // interrupt: true,
                    atBegin: true
                },
            },
        }
    });
    grunt.registerTask('default', ['watch']);

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-concat');
};
