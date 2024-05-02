import webpack from "webpack-stream";

export const menu = () => {
 return app.gulp.src(app.path.src.menu, { sourcemap: app.isDev })
.pipe(webpack({
    mode:app.isBuild ? "production" : "development",
    output: {
        filename: "menu.min.js",
    }
}))
    .pipe(app.gulp.dest(app.path.build.menu))
    .pipe(app.plugins.browsersync.stream());
}