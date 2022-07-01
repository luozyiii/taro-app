import tools from "@/common/tools";

const API_PRE = "https://www.imooc.com";

// 获取热门词汇
export const getHotwordsReq = () => {
  return tools.request({
    url: `${API_PRE}/search/hotwords`,
    method: "POST",
  });
};
