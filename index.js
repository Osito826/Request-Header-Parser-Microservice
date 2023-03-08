/*
1-i can get the IP address, perferred languages(from header Accept-Language) and system infos(from header User-Agent) for my device.
2-Your IP address should be returned in the ipadddress key
3-Your perferred language should be returned in the language key
4-Your software should be returned in the software key
*/

/*set up a get route
let responseObject = {}

app.get('/api/whoami', (request,response) => {
  response.json(responseObject)
})
*/
let responseObject = {}

app.get('/api/whoami', (request,response) => {
  //if want to trace the origin ip, enable property on app
  app.enable('trust proxy')
  //2
  responseObject['ipaddress'] = request.ip
  //3
  responseObject['language'] = request.get('Accept-Language')
  //4
  responseObject['software'] = request.get('User-Agent')
  
  response.json(responseObject)
})
