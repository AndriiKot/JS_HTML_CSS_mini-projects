module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
         optimization: 2,
        },
        files: {
          "./main.css": "./less_css/main.less",
        },
      },
    },
    watch: {
      styles: {
        files: ["less_css/**/*.less"], 
        tasks: ["less"],
        options: {
          nospawn: true,
        },
      },
    },
  });

  grunt.registerTask("default", ["watch"]);
};
