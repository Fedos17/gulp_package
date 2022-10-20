// інфо про плагіни //

import replace from "gulp-replace"; // пошук та заміна
import plumber from "gulp-plumber"; // опрацювання помилок
import notify from "gulp-notify"; // вивід повідомлення (підказок)
import browsersync from "browser-sync"; // локальний сервер
import newer from 'gulp-newer'; // перевірка оновлень
import ifPlugin from 'gulp-if';

// об'єкт для збуру та передачі плагінів
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
}