import { View, Button } from "@tarojs/components";
import Hello from "@/components/Hello";
import { getHotwordsReq } from "@/common/api";
import tools from "@/common/tools";
import "./index.scss";
import { useEffect } from "react";

// const a = 2;
// const b = 3;

const Index = () => {
  const init = async () => {
    const res = await getHotwordsReq();
    console.log(res);
  };
  const handleTest = () => {
    tools.navigateTo({
      url: "/pages/examples/scss/index",
      data: {},
    });
  };
  const handleSetKey = () => {
    tools.setStorageSyncWithTime(
      "user",
      {
        name: "hi",
      },
      10
    );
  };
  const handleGetKey = () => {
    const res = tools.getStorageSyncWithTime("user");
    console.log(res);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <View className="box">
      <Hello />
      <Button onClick={handleTest}>测试 navigateTo 方法</Button>
      <Button onClick={handleSetKey}>设置10s缓存的数据</Button>
      <Button onClick={handleGetKey}>获取缓存</Button>
    </View>
  );
};

export default Index;
