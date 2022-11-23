export const load = ({ url }) => {
  const currentRoute = url.pathname;
  const movida = "payaso";

  return {
    currentRoute,
    movida,
  };
};
