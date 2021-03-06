export const getRedirectPath = ({type, avatar}) => {
  // 根据用户信息， 返回跳转地址
  // user.type /boss /genius
  // user.avatar /bossinfo /geniusinfo
  let redirectStr = (type === 'boss' ? '/boss' : '/genius');
  if(!avatar) {
    redirectStr += 'info';
  }
  return redirectStr;
}