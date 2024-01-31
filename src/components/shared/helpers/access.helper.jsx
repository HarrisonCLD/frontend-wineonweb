export const checkAuthorization = (allowedRoles, element) => {
  if (allowedRoles.includes(user.id_role.id)) {
    return element;
  } else {
    navigateTo(navigate, "/");
  }
};
