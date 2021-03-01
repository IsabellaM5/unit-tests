export const hashtags = (text) => {
  return text.match(/#([\S]+)/igm);  //https://stackoverflow.com/questions/432493/how-do-you-access-the-matched-groups-in-a-javascript-regular-expression 
}                                    // I found the answer by looking in the above thread on StackOverflow. /IM
