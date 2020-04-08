module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin:{
            options:{
                collapseWhitespace:true,
                removeComments: true,
                collapseWhitespace: true
            },
            files:{
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        uglify:{
            "dist/jsnotepad.js": "jsnotepad.js",
            "dist/editor/editor.js": "editor/editor.js",
            "dist/menubar/menubar.js": "menubar/menubar.js",
            "dist/font/font.js": "font/font.js"
        },
        cssmin:{
            "dist/editor/editor.css": "editor/editor.css",
            "dist/menubar/menubar.css": "menubar/menubar.css",
            "dist/font/font.css": "font/font.css"
        }
    });
    
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin']);    
}