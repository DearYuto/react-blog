import { useNavigate } from 'react-router-dom';
import { deletePost } from './firebase/deletePost/deletePost';
import { PATH } from '@/components/router/constants/path';
import { toast } from 'react-toastify';

export const useDeletePost = () => {
  const navigate = useNavigate();

  const onDelete = (id: string) => async (e: React.MouseEvent) => {
    e.stopPropagation();

    const isDeleteConfirmed = window.confirm('게시글을 삭제할까요?');

    try {
      if (isDeleteConfirmed) {
        await deletePost(id);

        navigate(PATH.root);

        toast.success('게시글이 삭제되었습니다.');
      }
    } catch (err) {
      console.error(err);
      toast.error('게시글 삭제 실패! 잠시 후 다시 시도해주세요.');
    }
  };

  return { onDelete };
};
