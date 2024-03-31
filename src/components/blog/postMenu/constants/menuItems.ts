export type TabLabel = 'new' | 'popular';

export const postMenuItem: {
  id: number;
  title: TabLabel;
}[] = [
  {
    id: 0,
    title: 'new',
  },
  {
    id: 1,
    title: 'popular',
  },
] as const;
