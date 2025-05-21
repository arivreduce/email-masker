const maskEmail = (email) => {
  const atIndex = email.indexOf('@');
  const domainName = email.slice(atIndex);
  const firstChar = email.slice(0, 1);
  const lastChar = email.slice(atIndex - 1, atIndex);
  const toMaskString = email.slice(1, atIndex - 1);
  let maskString = '';
  for (let i = 0; i < toMaskString.length; i++) {
    maskString += '*';
  }
  return firstChar + maskString + lastChar + domainName;
};

const email = 'arriba@gmail.com';

console.log(maskEmail(email));
