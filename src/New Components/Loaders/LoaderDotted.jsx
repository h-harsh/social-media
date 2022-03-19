import './loaders.css'
import { Spin } from 'antd';

const LoaderDotted = () => {
    return ( 
        <div className='custom-loader-cont'>
            <Spin/>
        </div>
     );
}
 
export default LoaderDotted;