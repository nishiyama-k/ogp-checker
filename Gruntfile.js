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
        // js check
        jshint: {
            all: ['Gruntfile.js', path + '/js/*.js']
        },
        // javascript phase
        jsbeautifier: {
            files: ['Gruntfile.js', path + "/js/*.js",
                path + "/template/*.html"
            ]
        },
        concat: {
            jsapp: {
                src: [path + '/js/lib/jquery-1.11.3.js',
                    path + '/js/lib/jquery-ui.js',
                    path + '/js/lib/jquery.bootstrap.js',
                    path + '/js/lib/jquery.autocomplete.js',
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
        // css phase
        less: {
            bootstrap: {
                src: 'src/main/less/bootstrap/bootstrap.less',
                dest: path + '/css/build/bootstrap.css'
            },
            // theme: {
            // src: 'src/main/less/bootstrap/theme.less',
            // dest: path + '/css/lib/bootstrap-theme.css'
            // },
            paper: {
                src: 'src/main/less/bootstrap/paper/bootswatch.less',
                dest: path + '/css/build/bootswatch.css'
            },
            awesome: {
                src: 'src/main/less/font-awesome-4.4.0/font-awesome.less',
                dest: path + '/css/build/font-awesome.css'
            },
            app: {
                src: 'src/main/less/app.less',
                dest: path + '/css/app.css'
            }
        },
        cssmin: {
            cssapp: {
                src: [path + '/css/lib/jquery-ui.min.css',
                    path + '/css/lib/jquery-ui.theme.min.css',
                    path + '/css/build/font-awesome.css',
                    path + '/css/build/bootstrap.css',
                    path + '/css/build/bootswatch.css',
                    path + '/css/lib/jquery.autocomplete.css',
                    path + '/css/app.css'
                ],
                dest: path + '/css/build/application.min.css'
            }
        },
        // additional
        watch: {
            less: {
                files: ['src/main/less/*.less'],
                tasks: ['less:app']
            }
        },
        clean: {
            js: ['src/main/resources/static/js/build'],
            css: ['src/main/resources/static/css/build']
        }
    });

    grunt.registerTask('default', ['jshint', 'jsbeautifier', 'concat',
        'uglify', 'less', 'cssmin'
    ]);
    grunt.registerTask('lessmin', ['less', 'cssmin']);
    grunt.registerTask('jsmin', ['concat', 'uglify']);
};
