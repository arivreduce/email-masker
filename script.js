const maskEmail = (email) => {
  const atIndex = email.indexOf('@');
  const domainName = email.slice(atIndex);
  const firstChar = email[0];
  const lastChar = email[atIndex - 1];
  const maskLength = atIndex - 2;
  const maskString = '*'.repeat(Math.max(0, maskLength));
  return firstChar + maskString + lastChar + domainName;
};

const email = 'arriba@gmail.com';

console.log(maskEmail(email));
