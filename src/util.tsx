
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
    hash = [...hash, ...[[row, col]]];
  } else {
    let index = undefined;
    hash.forEach((h: any, i: number) => {
      if (h[0] === row && h[1] === col) {
        index = i;
      }
    });
    hash.splice(index, 1);
  }
  window.history.replaceState("pattern", "Title", "/#" + JSON.stringify(hash));
};