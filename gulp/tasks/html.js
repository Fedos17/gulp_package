import fileInclude from "gulp-file-include";
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import alias from "gulp-path-alias";
import {rootFolder} from "../config/path.js";
import replace from "gulp-replace";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                    title: 'HTML',
                    message: 'Error: <%= error.message %>'
                })
            )
        )
        // .pipe(alias({
        //     paths: {
        //         // '@libs': app.path.resolve(__dirname, '../src/libs'),
        //         '@img': `${rootFolder}/src/img`
        //         // 'wx$': 'wx/libs', // 将 'wx' 替换为 'wx/libs'
        //
        //     }
        // }))
        .pipe(fileInclude())
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append' : {
                        'key' : '_v',
                        'cover' : 0,
                        'to' : [
                            'css',
                            'js',
                        ]
                    },
                    'output' : {
                        'file' : 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(replace(`../img`, 'img'))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
}