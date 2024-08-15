module.exports = function(grunt) {
    // Configuração do projeto
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Configuração do LESS
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "dist/styles.css": "src/styles.less"
                }
            }
        },
        
        // Configuração do Watch
        watch: {
            styles: {
                files: ['src/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
            html: {
                files: ['src/*.html'],
                tasks: ['htmlmin'],
                options: {
                    spawn: false,
                },
            },
            scripts: {
                files: ['src/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
        },
        
        // Configuração do Clean
        clean: {
            build: {
                src: ['dist/']
            }
        },
        
        // Configuração do HTMLMin
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        
        // Configuração do Uglify
        uglify: {
            dist: {
                files: {
                    'dist/script.js': 'src/script.js'
                }
            }
        }
    });

    // Carregando os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registrando as tarefas
    grunt.registerTask('default', ['clean', 'less', 'htmlmin', 'uglify']);
};
