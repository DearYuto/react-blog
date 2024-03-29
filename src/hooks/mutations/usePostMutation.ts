import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postKeys } from '@/constants/queryKeys/posts';
import { deletePost } from '@/utils/firebase/deletePost/deletePost';

export const usePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.all });
    },
  });
};
