import {Dimensions, Platform} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

let isIPhoneX_v = false;
let isIPhoneXMax_v = false;
let isIPhoneWithMonobrow_v = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneX_v = true;
  }

  if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneXMax_v = true;
  }
}

export const isIPhoneX = () => isIPhoneX_v;
export const isIPhoneXMax = () => isIPhoneXMax_v;
export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;

export const getStatusBarHeight = Platform.select({
  ios: isIPhoneWithMonobrow_v ? 30 : 0,
  android: 0, //StatusBar.currentHeight - 24
  default: 0,
});

export function clamp(v: number, min: number, max: number) {
  const _min = Math.min(min, max);
  const _max = Math.max(min, max);

  return Math.max(Math.min(v, _max), _min);
}

export function next(v: number, min: number, max: number): number {
  const _min = Math.min(min, max);
  const _max = Math.max(min, max);
  const _next = v + 1;
  if (_next > _max) {
    return _min;
  }
  if (_next < min) {
    return _max;
  }
  return _next;
}

export function lerp(value1: number, value2: number, amount: number) {
  if (Math.abs(value2 - value1) < 0.00001) {
    return value2;
  }
  amount = Math.max(Math.min(amount, 1), 0);
  return value1 + (value2 - value1) * amount;
}

export function back(v: number, min: number, max: number): number {
  const _min = Math.min(min, max);
  const _max = Math.max(min, max);
  const _back = v - 1;
  if (_back > _max) {
    return _min;
  }
  if (_back < min) {
    return _max;
  }
  return _back;
}

const base64abc = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '+',
  '/',
];

export const bytesToBase64 = (bytes: any) => {
  let result = '',
    i,
    l = bytes.length;
  for (i = 2; i < l; i += 3) {
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
    result += base64abc[((bytes[i - 1] & 0x0f) << 2) | (bytes[i] >> 6)];
    result += base64abc[bytes[i] & 0x3f];
  }
  if (i === l + 1) {
    // 1 octet yet to write
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[(bytes[i - 2] & 0x03) << 4];
    result += '==';
  }
  if (i === l) {
    // 2 octets yet to write
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
    result += base64abc[(bytes[i - 1] & 0x0f) << 2];
    result += '=';
  }
  return result;
};
export const crc16_modbus = (buffer: any, start: any, end: any) => {
  // based on https://github.com/yuanxu2017/modbus-crc16/blob/master/crc16.js
  var crc = 0xffff;
  var odd;
  if (buffer.length < end) return [];
  for (var i = start; i < end; i++) {
    crc = crc ^ buffer[i];
    for (var j = 0; j < 8; j++) {
      odd = crc & 0x0001;
      crc = crc >> 1;
      if (odd) {
        crc = crc ^ 0xa001;
      }
    }
  }
  let data = [];
  data[0] = crc & 0x000000ff;
  data[1] = (crc & 0x0000ff00) >>> 8;
  return data;
};
