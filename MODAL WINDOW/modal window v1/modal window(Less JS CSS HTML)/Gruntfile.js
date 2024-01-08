module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
         optimization: 2,
        },
        files: {
          "style.css": "style.less",
        },
      },
    },
    // watch: {
    //   styles: {
    //     files: ["less/**/*.less"], // which files to watch
    //     tasks: ["less"],
    //     options: {
    //       nospawn: true,
    //     },
    //   },
    // },
  });

  // grunt.loadNpmTasks("grunt-contrib-watch");

  // grunt.registerTask("default", ["watch"]);
};
