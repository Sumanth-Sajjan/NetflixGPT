export const loginValidation = (email, password, name, isSignIn) => {
  const isValidEmail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password
  );
  var isValidName = true;
  if (!isSignIn) {
    isValidName = /^[A-Za-z][A-Za-z\s.'-]*[A-Za-z]$/.test(name);
    console.log(isValidName);
  }
  if (!isValidEmail) return "Email is not valid";
  if (!isValidPassword) return "Password is not valid";
  if (!isValidName) return "Name is not valid";
  return null;
};
