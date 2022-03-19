import './loaders.css'

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoaderSimple = ({size, color}) => {
  return (
    <div className='custom-loader-cont'>
      <LoadingOutlined
        style={{ fontSize: size, color: "var(--secondayColor)" }}
        spin
      />
      
    </div>
  );
};

export default LoaderSimple;
