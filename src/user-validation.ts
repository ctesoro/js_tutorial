export const usernameValidation = (username: string): boolean => {

  if (username.length > 4 && username.length < 25 && username.match(/^[a-zA-Z]/)
    && username.match(/^[A-Za-z0-9_]+$/) && username[username.length - 1] != '_') {

    return true;
  }
  else {
    return false;
  }
};
