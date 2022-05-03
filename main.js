window.onload = fetch2



function debug(text){


    let stuff = "%c text"
    
    let v = document.querySelector(".output").innerHTML += text

    console.log( v )


 }

function fetch2()
{

    let url = "https://sctennisclub.org/membership/json.php"

    fetch( url  ,{method: 'no-cors'})
    .then(response => response.json())
    .then(data => console.log(data));

}
function fetcher(){

     debug("initializing")
    fetch( "https://jsonplaceholder.typicode.com/users" ,{ method: 'get'}).then(

        function(response){
                console.log(response)
                debug(response)
            }

    ).then(

        function(response){
            debug("error")
            console.log(response)

        }
    )






}


