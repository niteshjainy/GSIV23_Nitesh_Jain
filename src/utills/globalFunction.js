export const filterMovieByDateDesc = (data, key) => {
  return data.sort((a, b) => {
    const date_a = new Date(a[key]);
    const date_b = new Date(b[key]);
    return date_b - date_a;
  });
};
