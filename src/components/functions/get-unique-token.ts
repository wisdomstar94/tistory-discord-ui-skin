function getRandomNumber(min: number, max: number): number {
  const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
}

function getRandomString(strLength: number): string {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < strLength; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function getUniqueToken(strLength: number): string {
  const timestamp = new Date().getTime();
  const timestamp_length = timestamp.toString().length;
  const str_max_length = strLength - timestamp_length;
  const first_length = getRandomNumber(1, str_max_length);
  const second_length = str_max_length - first_length;
  const token = "".concat(
    getRandomString(first_length),
    new Date().getTime().toString(),
    getRandomString(second_length)
  );
  return token;
}
