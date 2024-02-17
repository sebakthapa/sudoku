export const includesSubArray = (array: any[], subarray: any[]) => {
  const subArrayStringified = JSON.stringify(subarray);
  for (let i = 0; i < array.length; i++) {
    if (JSON.stringify(array[i]) === subArrayStringified) {
      return true;
    }
  }

  return false;
};
