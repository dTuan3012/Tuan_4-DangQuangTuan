import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Test.module.css'

const cx = classNames.bind(styles);

const Test = () => {
  const [hidden, setHidden] = useState(false)

  return (
    <div>
        <h1 className={cx({hidden: hidden})}>Dang Quang Tuan</h1>
        <button onClick={() => setHidden(!hidden)}>Toggle Hidden</button>
    </div>
    ) 
};
export default Test;


