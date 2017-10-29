<html>
  <head>
  <title>admin.onjay.in</title>
  <script src="/bower_components/fingerprintjs2/dist/fingerprint2.min.js"></script>
  <script>
    new Fingerprint2().get(function(result, components){
        myAsyncFunction('api/fcheck',{id:result}).then(function(res){
          window.location =res.url; 
        })
    });
    function myAsyncFunction(url,data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify(data));
  });
}
  </script>
</head>
<body>
</body>
</html>