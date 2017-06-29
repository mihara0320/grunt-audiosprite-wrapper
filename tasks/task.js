var audiosprite = require('audiosprite')

module.exports = function(grunt) {

    grunt.registerMultiTask('audiosprite', function() {
        var self = this
        var done = this.async(),
            async = grunt.util.async;

        async.waterfall([
            function(cb){
                var src = self.files[0].src
                var dest = self.data.files.dest
                var opts = self.data.option
                cb(null, src, opts, dest)
            },
            function(src, opts, dest, cb){
                audiosprite(src, opts, function(err, obj) {
                        if (err) return grunt.log.warn(err);
                        grunt.file.write(dest, JSON.stringify(obj, null, 2));
                        grunt.log.ok('Completed')
                        done();
                })
            },
        ], function(err, result){
            if (err) return grunt.log.warn(err);
        })
    });
};
