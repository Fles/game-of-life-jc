export const initGrid = (size: number) =>
  Array(size)
    .fill(null)
    .map(() =>
      Array(size)
        .fill(null)
        .map(() => 0)
    );

export const updateUrlHash = (row: number, col: number, live: boolean) => {
  let hash = JSON.parse(window.location.hash.substring(1));
  if (!live) {
    // TODO: check if there is a hasih in, do not add it again
    hash = [...hash, ...[[row, col]]];
  } else {
    var filtered = [...hash].filter(
      (element: string) =>
        JSON.stringify(element) !== JSON.stringify([row, col])
    );
    hash = [...filtered];
  }
  window.history.replaceState("pattern", "Title", "/#" + JSON.stringify(hash));
};

export const readFromUrlHash = (): number[][] => {
  let hash = JSON.parse(window.location.hash.substring(1));
  return [...hash];
};
