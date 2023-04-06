import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://haycafe.vn/wp-content/uploads/2022/03/Anh-anime-nu-anh-anime-girl.jpg"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>Nguyễn Mai Hoa</h4>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </div>
                <span className={cx('usename')}>Nguyễn Mai Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
