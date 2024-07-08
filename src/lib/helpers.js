export const calculateRating = (comments) => {
  const totalRate = comments?.reduce((acc, comment) => {
    return acc + comment.rating;
  }, 0);
  return totalRate !== 0 ? totalRate / comments?.length : 0;
};
