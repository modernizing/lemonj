import fs from 'fs';
import path from 'path';
import { Dir } from './dir';

export function walkDir(dir: Dir, callback: (s: Dir) => any) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}
