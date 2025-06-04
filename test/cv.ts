import "../src";

export async function setupOpenCv() {
  const _cv = require("../dist/opencv");
  global.cv = await _cv;
}

export function translateException(err: any) {
  if (typeof err === "number") {
    try {
      const exception = cv.exceptionFromPtr(err);
      return exception;
    } catch (error) {
      // ignore
    }
  }
  return err;
}
