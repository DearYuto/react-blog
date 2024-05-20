export const TabLabels = {
  NEW: 'new',
  POPULAR: 'popular',
} as const;

export type TabLabel = (typeof TabLabels)[keyof typeof TabLabels];

export const postMenuItem: {
  id: number;
  title: TabLabel;
}[] = [
  {
    id: 0,
    title: TabLabels.NEW,
  },
  {
    id: 1,
    title: TabLabels.POPULAR,
  },
] as const;
