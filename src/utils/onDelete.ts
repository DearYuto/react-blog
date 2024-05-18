import { useNavigate } from 'react-router-dom';
import { PATH } from '@/components/router/constants/path';
import { toast } from 'react-toastify';
import { usePostMutation } from '@/hooks/mutations/usePostMutation';
import { ERROR_MESSAGES, MESSAGES } from '@/constants/common/messages';

export const useDeletePost = () => {
  const navigate = useNavigate();
  const { mutate } = usePostMutation();

  const onDelete = (id: string) => async (e: React.MouseEvent) => {
    e.stopPropagation();

    const isDeleteConfirmed = window.confirm(MESSAGES.CONFIRM_DELETE_POST);

    try {
      if (isDeleteConfirmed) {
        mutate(id);

        navigate(PATH.root);

        toast.success(MESSAGES.DELETE_POST);
      }
    } catch (err) {
      console.error(err);
      toast.error(ERROR_MESSAGES.DELETE_POST_FAILURE);
    }
  };

  return { onDelete };
};
