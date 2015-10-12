module.exports = function(grunt) {

    var path = 'src/main/resources/static';

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        concat: {
            jsapp: {
                src: [path + '/js/lib/jquery-1.11.3.js',
                    path + '/js/lib/jquery-ui.js',
                    path + '/js/lib/jquery.autocomplete.js',
                    path + '/js/lib/jquery.bootstrap.js',
                    path + '/js/app.js'
                ],
                dest: path + '/js/build/application.js'
            }
        },
        uglify: {
            jsapp: {
                src: '<%= concat.jsapp.dest %>',
                dest: path + '/js/build/application.min.js'
            }
        },
        cssmin: {
            cssapp: {
                src: [path + '/css/lib/bootstrap.css',
                    path + '/css/lib/bootswatch.css',
                    path + '/css/lib/jquery-ui.min.css',
                    path + '/css/lib/jquery-ui.theme.min.css',
                    path + '/css/plugin/jquery.autocomplete.css',
                    path + '/css/app.css'
                ],
                dest: path + '/css/build/application.min.css'
            }
        },
        less: {
            bootstrap: {
                src: 'src/main/less/bootstrap/bootstrap.less',
                dest: path + '/css/lib/bootstrap.css'
            },
            // theme: {
            // src: 'src/main/less/bootstrap/theme.less',
            // dest: path + '/css/lib/bootstrap-theme.css'
            // },
            paper: {
                src: 'src/main/less/bootstrap/paper/bootswatch.less',
                dest: path + '/css/lib/bootswatch.css'
            },
            app: {
                src: 'src/main/less/app.less',
                dest: path + '/css/app.css'
            }
        },
        watch: {
            less: {
                files: ['src/main/less/*.less'],
                tasks: ['less']
            }
        },
        jshint: {
            all: ['Gruntfile.js', path + '/js/*.js']
        },
        jsbeautifier: {
            files: ['Gruntfile.js', path + "/js/*.js", path + "/template/*.html"]
        },
        clean: {
            js: ['<%= concat.jsapp.dest %>']
        }
    });

    grunt.registerTask('default', ['less', 'concat', 'uglify', 'cssmin',
        'jshint', 'jsbeautifier', 'clean'
    ]);
    grunt.registerTask('lessmin', ['less', 'cssmin']);
    grunt.registerTask('jsmin', ['concat', 'uglify']);
};
