'use strict';

module.exports.hello = function(context, minutTimer) {{
  const minutURL = ''
  const timeStamp = new Date().toISOString();
  // if(minutTimer.isPastDue) {
  //   context.log('Calling MinutAPI and acquiring necessary properties');
  // }
  context.log('Timer trigger function ran!', timeStamp)
  context.done();
}}
