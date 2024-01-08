module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  // grunt.initConfig({
  //   // pkg: grunt.file.readJSON("package.json"),
  //   less: {
  //     options: {
  //       paths: "./css/less/",
  //       yuicompress: true,
  //     },
  //     files: {
  //       "style.css": "css/less/style.less",
  //     },
  //   },
  // });
  grunt.initConfig({
    less: {
       development: {
          options: {
             compress: true,
             yuicompress: true,
             optimization: 2
          },
          files: {
             // target.css file: source.less file
             "css/main.css": "less/main.less"
          }
      }
 },
};
