import { View } from "@tarojs/components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const dvaDetailDemo = (props) => {
  const { user } = props;
  return (
    <View>
      <View>姓名：{user.name}</View>
      <View>手机：{user.phone}</View>
    </View>
  );
};

export default connect(mapStateToProps, null)(dvaDetailDemo);
