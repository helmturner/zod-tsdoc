import { API, FileInfo, Options } from "jscodeshift";

export type TransformOptions = Options & {
  watch?: true;
  dryRun?: true;
};

export default function (fileInfo: FileInfo, api: API, options: TransformOptions) {
  return api
    .jscodeshift(fileInfo.source).paths().forEach(
      path => {
        if ("program" in path.value) {
          path.value.program.body.forEach((node) => {
            console.log(node.type);
          });
        }
      }
    )
    // .forEach((path,i, paths) => {
    // })
    // .renameTo("bar")
    // .toSource();
};
