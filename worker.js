addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
if(request.method == "POST") {
    var url = 'https://downloads.sourceforge.net/project/'
    var headers = request.headers;
    url+=headers.get("Project");
    url+="/";
    url+=headers.get("file-path");
  return fetch(url);
  }
  else if(request.method == "GET") {
    return new Response("Welcome to SourceForge File Proxy Server. \n\nThis webserver can respond only over POST requests. \n\nPOST Headers needed: \nProject \nfile-path")
  }
}
