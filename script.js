let url ='https://jsonplaceholder.typicode.com'
//GET
fetch(`${url}/posts`)
  .then((response) => response.json())
  .then((json) => console.log(json));

//POST

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
//PUT

let creando ={
    id:1,
    title: 'fobia',
    body: 'bar',
    userId: 4,
}

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PUT',
    body:JSON.stringify(creando),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
//PATCH
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PATCH',
    body:JSON.stringify({
        title: 'fobiandores',
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
//DELETE

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'DELETE',
})
