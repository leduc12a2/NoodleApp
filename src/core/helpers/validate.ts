export const regexPhone = /^(\+\d{1,3}|0)?\d{9,11}$/g;
export const regexPhoneNotPlus = /^\d{10,12}$/g;
export const regexEmail = /^[a-z0-9_.]+@[a-z]+\.[a-z.]+$/gi;
export const regexVoucher = /^[a-z0-9]+$/gi;
export const regexNotEmpty = /\S+/gm;
export const regexName = /^[a-zA-Z ,.'-]+$/i;
export const regexCCV = /^\d{3,4}$/i;
export const regexUrl = /^http[s]*:{1}\/{2}/g;
export const regexFontHtml = /(font-family:)([a-zA-Z0-9:;\.\s\(\)\-\,']+)(;)/gim;
export const regexPostCode = /^\d+$/;
export const regexNumberAndCharacter = /^[a-zA-Z0-9]+$/;

export const isEmail = (str: string) => {
  return str?.match(regexEmail);
};

export const isPhone = (str: string) => {
  return str?.match(regexPhone);
};

export const isVoucher = (str: string) => {
  return str?.match(regexVoucher);
};

export const isUrl = (str: string) => {
  return str?.match(regexUrl);
};

export const luhnCheck = (cardNumber: string) => {
  cardNumber = cardNumber.split(' ').join('');
  if (
    parseInt(cardNumber) <= 0 ||
    !/\d{15,16}(~\W[a-zA-Z])*$/.test(cardNumber) ||
    cardNumber.length > 16
  ) {
    return false;
  }
  var carray = new Array();
  for (var i = 0; i < cardNumber.length; i++) {
    carray[carray.length] = cardNumber.charCodeAt(i) - 48;
  }
  carray.reverse();
  var sum = 0;
  for (var i = 0; i < carray.length; i++) {
    var tmp = carray[i];
    if (i % 2 != 0) {
      tmp *= 2;
      if (tmp > 9) {
        tmp -= 9;
      }
    }
    sum += tmp;
  }
  return sum % 10 == 0;
};
