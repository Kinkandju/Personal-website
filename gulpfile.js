let project_folder = "dist";
let source_folder = "#src";

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/"
  },

  src: {
    html: source_folder + "/*.html",
    css: source_folder + "/less/style.less",
    js: source_folder + "/js/script.js",
    img: source_folder + "/img/**/*.{jpg, png, svg, webp}",
    fonts: source_folder + "/fonts/*.{woff, woff2}"
  },

  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/less/**/*.less",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpg, png, svg, webp}"
  },

  clean: "./" + project_folder + "/"
}

let {src, dest} = require("gulp"),
  gulp = require("gulp"),
  browsersync = require("browser-sync").create();

  function browserSync(params) {
    browsersync.init({
      server: {
        baseDirectory: "./" + project_folder + "/"
      },
      port: 3000,
      notify: false
    })
  }

  function html() {
    return src(path.src.html)
      .pipe(dest(path.build.html))
      .pipe(browsersync.stream())
  }

  function watchFiles(params) {
    gulp.watch([path.watch.html], html);
  }

let build = gulp.series(html);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
