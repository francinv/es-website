import { SortableItem } from "@app/types";

export const sortAscending = <T extends SortableItem>(listToSort: T[]): T[] =>
  listToSort.sort((a, b) => a.sortOrder - b.sortOrder);
