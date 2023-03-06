export const isError = (object: any): boolean => {
  return object.hasOwnProperty("Error Message");
};
