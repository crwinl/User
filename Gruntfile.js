module.exports = function(grunt) {
    // LiveReload的默认端口号，你也可以改成你想要的端口号
    var lrPort = 35729;
    // <script src="http://127.0.0.1:35729/livereload.js?snipver=1" type="text/javascript"></script>
    var lrSnippet = require('connect-livereload')({ port: lrPort });
    // 使用 middleware(中间件)，就必须关闭 LiveReload 的浏览器插件
    var lrMiddleware = function(connect, options) {
        return [
            // 把脚本，注入到静态文件中
            lrSnippet,
            // 静态文件服务器的路径
            connect.static(options.base),
            // 启用目录浏览(相当于IIS中的目录浏览)
            connect.directory(options.base)
        ];
    };
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        // 通过connect任务，创建一个静态服务器
		connect: {
			options: {
				// 服务器端口号
				port: 8000,
				// 服务器地址(可以使用主机名localhost，也能使用IP)
				hostname: 'localhost',
				// 物理路径(默认为. 即根目录) 注：使用'.'或'..'为路径的时，可能会返回403 Forbidden. 此时将该值改为相对路径 如：/grunt/reloard。
				base: 'src/*.*'
			},
			livereload: {
				options: {
					// 通过LiveReload脚本，让页面重新加载。
					middleware: lrMiddleware
				}
			}
		},
		// 通过watch任务，来监听文件是否有更改
        watch: {
            client: {
                // 我们不需要配置额外的任务，watch任务已经内建LiveReload浏览器刷新的代码片段。
                options: {
                    livereload: lrPort
                },
                // '**' 表示包含所有的子目录
                // '*' 表示包含所有的文件
                files: ['src/*.html', 'src/css/*', 'src/js/*', 'src/img/**/*']
            }
        },
        concat : {
            /* js,css合并 */
            domop: {
                one: {
                    src: ['src/js/*.js'],
                    dest: 'dest/script.js'
                },
                two: {
                    src: ['src/css/*.css'],
                    dest: 'dest/style.css'
                }
            }
        },
        uglify : {
            /* 压缩js */
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> author:crwinl*/\n'
            },
            build : {
                src : 'dest/script.js',
                dest : 'dest/script.min.js'
            }
        },
		imagemin: {
            /* 压缩图片大小 */
            dist: {
                files: [{
                    expand: true, // 启用下面的选项
                    cwd: "src/img/", // 指定待压缩的文件路径
                    src: ['*.{jpg,png,gif}'], // 匹配相对于cwd目录下的所有图片
                    dest: "dest/img/" // 生成的压缩文件存放的路径
                }]
            }
        },
        cssmin: {
            /* 压缩css */
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> author:crwinl*/'
            },
            minify: {
                expand: true, // 启用下面的选项
                cwd: 'src/css/', // 指定待压缩的文件路径
                src: ['*.css', '!*.min.css'], // 匹配相对于cwd目录下的所有css文件(排除.min.css文件)
                dest: 'dest/css', // 生成的压缩文件存放的路径
                ext: '.min.css' // 生成的文件都使用.min.css替换原有扩展名，生成文件存放于dest指定的目录中
            }
        },
        cptpl: {
            your_target: {
                options: {
                    // 任务特定的选项放在这里
                },
                files: {
                    // 目标特定的文件列表放在这里
                    'tmp/': ['test/html/abc.html', 'test/html/abc2.html', 'mytemplate/*']
                }
            }
        }
    });
    // 载入插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-cptpl');
    // 注册任务
    grunt.registerTask('default', ['concat', 'connect', 'uglify' ,'imagemin' ,'cssmin']);
    grunt.registerTask('live', ['watch']);
};