import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const dvaDemo = (props) => {
  const { user } = props;
  const updateInfo = () => {
    const { dispatch } = props;
    dispatch({
      type: "user/update",
      payload: {
        name: "luozhiyi",
        phone: "158*****603",
      },
    });
  };
  const goToNextPage = () => {
    Taro.navigateTo({
      url: "/pages/examples/dva/detail",
    });
  };
  return (
    <View>
      <Button onClick={updateInfo}>更新用户信息</Button>
      <View>姓名：{user.name}</View>
      <View>手机：{user.phone}</View>
      <Button onClick={goToNextPage}>跳转到下一页</Button>
    </View>
  );
};

export default connect(mapStateToProps, null)(dvaDemo);
