import { useSelector } from 'react-redux';

import { LikeIcon } from '@/svg/LikeIcon';
import { formatDate, convertBytesToMB, classNames } from '@/utils';
import { useDispatch } from '@/redux/store';
import { selectActiveImage, setAsideProps, setDeleteImage, setImageAsFavorited } from '@/redux/reducer';
import { CloseIcon } from '@/svg/CloseIcon';
import styles from '@/styles/modules/Aside.module.css';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { FigureDetails } from './FigureDetails';

interface AsideProps {
  isOpen: boolean;
}

export const Aside = ({ isOpen }: AsideProps) => {
  return (
    <aside className={classNames(styles.aside, isOpen ? styles.visible : '')}>
      <FigureDetails />
    </aside>
  );
};
