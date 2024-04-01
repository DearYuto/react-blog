import { NavigateFunction } from 'react-router-dom';
import { PATH } from '@/components/router/constants/path';

export const onEdit = (id: string, navigate: NavigateFunction) => (e: React.MouseEvent) => {
  e.stopPropagation();

  if (!id) return;

  navigate(`${PATH.write}/${id}`);
};
