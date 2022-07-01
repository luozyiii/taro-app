import { View } from "@tarojs/components";
import Hello from "@/components/Hello";
import { getHotwordsReq } from "@/common/api";
import "./index.scss";
import { useEffect } from "react";

// const a = 2;
// const b = 3;

const Index = () => {
  const init = async () => {
    const res = await getHotwordsReq();
    console.log(res);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <View className="box">
      <Hello />
    </View>
  );
};

export default Index;
