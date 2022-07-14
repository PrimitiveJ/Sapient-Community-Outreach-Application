
// import assets
import { images } from '../../assets';

import styles from './style.module.css';
import { objectToClassName as toClassName } from '../../utils';

const {
    logoGroup
} = styles;

const Logo = ({ children }) => {

    // return logo component
    return (
        <div className={logoGroup}>
            <img src={images.brand.appLogo.base} alt="our logo" />
            {children}
        </div>
    );

}

export default Logo;

