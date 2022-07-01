import Taro from "@tarojs/taro";

const tools = {
  /**
   * 网络请求
   * @param opts
   * @returns
   */
  request: (opts: {
    url: string;
    params?: {} | any;
    method?:
      | "OPTIONS"
      | "HEAD"
      | "GET"
      | "POST"
      | "PUT"
      | "DELETE"
      | "TRACE"
      | "CONNECT";
    [x: string]: any;
  }) => {
    const { url = "", params = {}, method = "GET", ...rest } = opts;
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
        data: params,
        method,
        ...rest, // 剩余参数
      }).then((res) => {
        const { data } = res;
        if (data?.result === 0) {
          // 成功
          resolve(data);
        } else {
          // 不是预期的结果
          reject(res);
        }
      });
    });
  },
  /**
   * 页面loading
   * @param param
   * @returns
   */
  showLoading: (param: string | any) => {
    let dptOpts = {
      title: "加载中",
      mask: true, // 防止触摸穿透
    };
    if (Object.prototype.toString.call(param) === "[object String]") {
      dptOpts.title = param;
    } else if (Object.prototype.toString.call(param) === "[object Object]") {
      dptOpts = {
        ...dptOpts,
        ...param,
      };
    }
    return Taro.showLoading(dptOpts);
  },
  /**
   * 页面提示
   * @param param
   */
  showToast: (param) => {
    let dptOpts: any = {
      title: "温馨提示", // 提示内容
      icon: "none",
      mask: true,
      duration: 2000, // 提示时间
    };
    if (Object.prototype.toString.call(param) === "[object String]") {
      dptOpts.title = param;
    } else if (Object.prototype.toString.call(param) === "[object Object]") {
      dptOpts = {
        ...dptOpts,
        ...param,
      };
    } else {
      throw new Error("参数类型有误，应该是字符串或者对象");
    }
    return Taro.showToast(dptOpts);
  },
};

export default tools;
