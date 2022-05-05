window.onload = fetcher

/*

  https://githubmutt.github.io/pcc193-assign11/
*/

function write(text){


    let stuff = "%c text"
    
    let v = document.querySelector(".output").innerHTML += text + " "

    console.log( text)


 }

function fetcher()
{

   
   let url = "https://jsonplaceholder.typicode.com/users"

   // Testing url for error in fetching
 //  url = "httpstat.us:/500"
   
   let elem = document.querySelector(".output")
   elem.style.color = "blue"
   elem.style.color = "#2980b9"
    
   fetch( url  , {method: 'get'})
    .then(response => response.json())
    .then( data => {

        console.log( data )
        document.querySelector(".output").innerHTML =  ""

        for(let v of data){
            write( "<b>" + v.name + " (" + v.username + ") " + v.email + " " + v.phone + "</b><br>" )
            write("WEBSITE: " + v.website + "<br>")
            write("ADDRESS: " + v.address.street + " " + v.address.suite + " " + v.address.city + " " + v.address.zipcode + "<br>")
            write("GEO: [ " + v.address.geo.lat + " , " + v.address.geo.lng + " ]")
            write("<br>")
            write(v.company.name + "<br>" )
            write(v.company.catchPhrase + "<br>")
            write(v.company.bs + "<br>")

            write("<p>")
        }

    }
    
    ).catch(
          function( response ){
              // https://www.tjvantoll.com/2015/09/13/fetch-and-errors/

              write("Error fetching " + url + "<br>" )
              write("TypeError: " + response.message )
          }


    );

}


