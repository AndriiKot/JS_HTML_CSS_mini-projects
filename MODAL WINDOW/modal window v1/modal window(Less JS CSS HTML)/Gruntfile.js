module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.initConfig({ pkg: grunt.file.readJSON("package.json") });
};
