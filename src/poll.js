const token = 'EAACmK8cwgnIB1I1raX7621janKLfW0ckMr1Z.....sXO1SzBLpeMP6DGCSc0cXr6zYbSRgk3lvy1EJeMIB0BaMomxHotIsMJ1zm2HFXayLBPDpAQy4TiL7M52QWbg3MZD';
// 粉絲專頁的 page token

const videoID = '190238981712769'
// 直播影片的 ID

import reactionTypes from './reactionTypes';

export default () => (
  fetch(`https://graph.facebook.com/v2.11/${videoID}?access_token=${token}&fields=reactions.type(LIKE).summary(total_count).limit(0).as(like),reactions.type(LOVE).summary(total_count).limit(0).as(love),reactions.type(WOW).summary(total_count).limit(0).as(wow),reactions.type(HAHA).summary(total_count).limit(0).as(haha),reactions.type(SAD).summary(total_count).limit(0).as(sad),reactions.type(ANGRY).summary(total_count).limit(0).as(angry)`)
  .then(rs => rs.json())
  .then(rs => reactionTypes.reduce((acc, key)=>({
    ...acc,
    [key]: rs[key].summary.total_count,
  }), {}))
);
