import { View, Text } from "@tarojs/components";
import "./index.scss";
import styles from "./index.module.scss";

const ScssDemo = () => {
  return (
    <View>
      <View>全局样式：Sass</View>
      <View className="css-1">
        我是通过resource方式注入mixins; 我是通过resource方式注入的;
        我是通过resource方式注入的; 我是通过resource方式注入的;
        我是通过resource方式注入的;
      </View>
      <Text className="css-3">我是通过resource方式注入的“常量”</Text>
      <View>Data注入</View>
      <Text className="css-2">我是通过data方式注入的</Text>
      <View className={styles.abc}>结合css modules</View>

      <View className="g-app-test">我是通过app.scss设置的</View>
    </View>
  );
};

export default ScssDemo;
