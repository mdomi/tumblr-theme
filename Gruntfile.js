module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build'],
        watch: {
            src: {
                files: ['index.html', 'lib/css/*.scss'],
                tasks: ['default']
            }
        },
        sass: {
            dist: {
                files: {
                    'build/css/main.css': 'lib/css/main.scss'
                }
            }
        },
        connect: {
            server: {
                options: {
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['clean', 'sass']);
    grunt.registerTask('dev', ['build', 'connect:server', 'watch']);

    grunt.registerTask('default', ['build']);
};