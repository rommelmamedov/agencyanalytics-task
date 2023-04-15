import { FigureDetails } from 'components/FigureDetails';
import { classNames } from 'utils';
import styles from 'styles/modules/Aside.module.css';

interface AsideProps {
  isOpen: boolean;
}

export const Aside = ({ isOpen }: AsideProps) => (
  <aside className={classNames(styles.aside, isOpen ? styles.visible : '')}>
    <FigureDetails />
  </aside>
);
