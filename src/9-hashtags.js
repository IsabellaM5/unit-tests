export const hashtags = (text) => {
  return text.match(/#([\S]+)/igm);  //https://stackoverflow.com/questions/432493/how-do-you-access-the-matched-groups-in-a-javascript-regular-expression
}
