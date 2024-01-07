module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
        files: ['**/*.ts'],
        tasks: ['exec:run_tsc']
    },
    exec: {
        run_tsc: {cmd: 'tsc'}
    }
    });

    grunt.registerTask('default', ['watch']);
    
};

module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./assets/stylesheets/less"],
                    yuicompress: true
                },
                files: {
                    "./assets/stylesheets/css/style.css": "./assets/stylesheets/less/style.less"
                }
            }
        },
        watch: {
            files: "./assets/stylesheets/less/*",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
