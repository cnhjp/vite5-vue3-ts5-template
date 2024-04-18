import fs from 'node:fs';
import { exec } from 'node:child_process';
import type { PluginOption } from 'vite'

export interface WatchAndExecOptions {
  /**
   * 要监听的文件路径以及执行的命令
   */
  [file: string]: string[] | string
}

function watchAndDo(options: WatchAndExecOptions): PluginOption {
  return {
    name: 'watch-and-exec',
    apply: 'serve',
    configureServer(_server) {
      for (const file in options) {
        const command = options[file];
        fs.watch(file, (event, _filename) => {
          if (event === 'change') {
            if (Array.isArray(command)) {
              command.forEach((cmd) => {
                exec(cmd, (error, stdout, stderr) => {
                  if (error)
                    throw new Error(`Execution of command "${cmd}" failed: ${error.message}`);

                  if (stderr)
                    console.error(`Command "${cmd}" caused errors: ${stderr}`);

                  console.log(`Command "${cmd}" output: ${stdout}`);
                });
              });
            }
            else {
              exec(command, (error, stdout, stderr) => {
                if (error)
                  throw new Error(`Execution of command "${command}" failed: ${error.message}`);

                if (stderr)
                  console.error(`Command "${command}" caused errors: ${stderr}`);

                console.log(`Command "${command}" output: ${stdout}`);
              });
            }
          }
        });
      }
    },
  }
}

export default watchAndDo;
