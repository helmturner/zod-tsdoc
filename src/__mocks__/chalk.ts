type DeepWritable<T> =
  T extends { [key in keyof T]: infer U } ?
    { -readonly [key in keyof T]?: DeepWritable<U> }
  : T;

const chalk =
  jest.genMockFromModule<DeepWritable<import("chalk").ChalkInstance>>("chalk");

chalk.red = jest.fn();
chalk.green = jest.fn();
chalk.blue = {
  bold: jest.fn(),
};

module.exports = chalk;
