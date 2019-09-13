export const initGrid = (size: number) =>
  Array(size)
    .fill(null)
    .map(() =>
      Array(size)
        .fill(null)
        .map(() => 0)
    );

export const resetUrlHash = () => {
  window.history.pushState("pattern", "Title", "/#");
};

export const updateUrlHash = (row: number, col: number, live: boolean) => {
  let hash = window.location.hash.substring(1);
  if (!live) {
    hash += `${row}.${col},`;
  } else {
    let filtered = [...hash.split(",")].filter(
      (element: string) => element !== `${row}.${col}`
    );
    hash = [...filtered].join(",");
  }
  window.history.replaceState("pattern", "Title", "/#" + hash);
};

export const readFromUrlHash = (): string[] => {
  return [...window.location.hash.substring(1).split(",")].filter(Boolean);
};
