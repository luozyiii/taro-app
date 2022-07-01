import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

const Hello = () => {
  return (
    <View>
      Hello world 组件
      <Text className={styles.abc}>css modules</Text>
    </View>
  );
};

export default Hello;
