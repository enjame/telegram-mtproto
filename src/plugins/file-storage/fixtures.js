//@flow

import Promise from 'bluebird'

const { access,
        writeFile,
        readFile,
        constants: { W_OK }
      } = require('fs')

export const checkAccess =
  (filepath: string) =>
    new Promise((rs, rj) =>
      access(filepath,
             W_OK,
             (err) => err == null
              ? rs()
              : rj(err)))

export const writeData =
  (filepath: string, data: string) =>
    new Promise((rs, rj) =>
      writeFile(filepath,
                data,
                (err) => err == null
                  ? rs()
                  : rj(err)))

export const readData =
  (filepath: string) =>
    new Promise((rs, rj) =>
      readFile(filepath,
               (err, data: Buffer) => err == null
                 ? rs(data.toString())
                 : rj(err)))

export const createFile = (filepath: string) =>
  writeData(filepath, '{}')