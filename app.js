// Request Creator Object
class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //GET Request
    get(url, callback) {
        this.xhr.open("GET", url); //connection opened
        this.xhr.onload = function () {
            if (this.status === 200) {
                callback(null, this.responseText);
            } else {
                callback("GET Error", null)
            }
        }
        this.xhr.send();
    }

    //POST Request
    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText)
            } else {
                callback("POST Error", null);
            }
        }
        this.xhr.send(JSON.stringify(data))

    }

    //PUT Request
    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText)
            } else {
                callback("PUT Error", null);
            }
        }
        this.xhr.send(JSON.stringify(data))
    }

    //DELETE Request
    delete(url, callback) {
        this.xhr.open("DELETE", url); //connection opened
        this.xhr.onload = function () {
            if (this.status === 200) {
                callback(null, this.responseText);
            } else {
                callback("DELETE Error", null)
            }
        }
        this.xhr.send();
    }

}

const req = new Request();


//// For GET Request ////

req.get("https://jsonplaceholder.typicode.com/albums", function (err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }

})


//// For POST Request ////

// req.post("https://jsonplaceholder.typicode.com/albums",
//  {userId:110, title: "mabcodes"}, function(err, response){
//      if(err === null){
//         console.log(response);
//      }
//      else{
//          console.log(err);
//      }
//  })


//// For PUT Request ////

// req.put("https://jsonplaceholder.typicode.com/albums/1", {
//     userId: 110,
//     title: "mabcodes"
// }, function (err, response) {
//     if (err === null) {
//         console.log(response);
//     } else {
//         console.log(err);
//     }
// })


//// For DELETE Request ////

// req.delete("https://jsonplaceholder.typicode.com/albums/1", function(err, response){
//     if(err === null){
//         console.log(response);
//         console.log("Delete Progress Successful");
//     }
//     else{
//         console.log(err);
//     }
// })