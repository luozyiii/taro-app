/**
 * 将对象解析成url参数
 * @param {*} obj
 * @returns
 */
export const objectToString = (obj) => {
  let searchKeys = [];
  if (
    Object.prototype.toString.call(obj) === "[object Object]" &&
    Object.keys(obj).length
  ) {
    for (const key in obj) {
      searchKeys.push(`${key}=${obj[key]}`);
    }
  }
  return searchKeys.join("&");
};
