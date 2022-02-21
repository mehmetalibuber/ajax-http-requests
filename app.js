// Request Creator Object
class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    //GET Request
    get(url, callback){
        this.xhr.open("GET", url); //connection opened
        this.xhr.onload = function(){
            if(this.status === 200){
                callback(null, this.responseText);
            }
            else{
                callback("GET Error", null)
            }
        }
        this.xhr.send();
    }
    //POST Request
    post(url, data, callback){
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                callback(null, this.xhr.responseText)
            }
            else{
                callback("POST Error", null);
            }

        }
        this.xhr.send(JSON.stringify(data))

    }

}

const req = new Request();
req.get("https://jsonplaceholder.typicode.com/albums", function(err, response){
    if(err === null){
        //console.log(response);
    }
    else{
        //console.log(err);
    }
    
})

req.post("https://jsonplaceholder.typicode.com/albums",
 {userId:110, title: "mabcodes"}, function(err, response){
     if(err === null){
        console.log(response);
     }
     else{
         console.log(err);
     }
 })