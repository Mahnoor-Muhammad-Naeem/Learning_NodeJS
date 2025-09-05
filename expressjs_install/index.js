// const express = require('express')
// const app = express()

// app.listen(3000, ()=>{
//     console.log('Successfully Connected on port 3000.')
// })

// app.get('/', (req, res) => {
//  res.send("<h1>Hello World</h1>")
// })

// app.get('/', (req, res) => {
//     res.send("<h1>Welcome to Home Page</h1>")
// })

// app.get('/about', (req, res) => {
//     res.send("<h1>About Page</h1>")
// })

// app.get('/about/user', (req, res) => {
//     res.send("<h1>User Page</h1>")
// })

// ROUTING:
// app.get('/user/:userid-:bookid', (req, res) => {
//     res.send(req.params)
// })

// app.get('/search', (req, res) => {
//     const name = req.query.name   
//     const age = req.query.age   
    
//     res.send('Search results for Name : ${name} , Age : ${age}')
// })

// RESPONSE METHODS:
// app.get('/user', (req, res) => {
//  res.send('Hello')
//})

// EXPRESSJS RESPONSE METHODS:     
// res.send() -> Text, HTML, Object, Array, Buffers 
// res.json() -> JSON (JAVASCRIPT OBJECT NOTATION)
// res.jsonp() -> JSONP (JSON WITH PADDING)
// res.redirect() 
// res.render() -> OPEN HTML FILE USING A TEMPLATE ENGINE
// res.download() -> PDF, IMAGE FILE, MUSIC, VIDEO, EXCEL ETC.
// res.sendFile()
// res.end()
// res.sendStatus()
// res.headersSent()
// res.set()
// res.get()

// EXPRESSJS RESPONSE METHODS, CODE EG:
// app.get('/', (req, res) => {
//     res.send(
//         {
//             name: "Mahnoor",
//             age: 20
//         }
//     )
// })

// FOR ARRAY:
// app.get('/', (req, res) => {
//     res.send(
//         ['Apple', 'Banana', 'Mango']
//     )
// })

// app.get('/', (req, res) => {
//     res.json(
//         { name: 'Mahnoor', age: 20}
//     )
// })

// FOR JSON: PASS ARRAY OF OBJECT, RETURN IN JSON.
// app.get('/', (req, res) => {
//     const users= [
//         {id: 1, name: 'Mahnoor'},
//         {id: 2, name: 'Naeem'}
//     ]
//     res.json(users)
// })
// FOR JSONP:
// app.get('/', (req, res) => {
//     const users= [
//         {id: 1, name: 'Mahnoor'},
//         {id: 2, name: 'Naeem'}
//     ]
//     res.jsonp(users)
// })

// app.set('view engine', 'ejs')

// FOR CALLBACK FUNCTION
// app.get('/', (req, res) => {
//     res.jsonp({ name: 'Mahnoor', age: 20})
// })

// app.get('/about', (req, res) => {
//     res.redirect('/user');
// })

// app.get('/about', (req, res) => {
//     res.redirect('https://www.google.com');
// })

// app.get('/user', (req, res) => {
//     res.send("<h1>User Page</h1>")
// })

// FOR USER ROUTE:
// app.get('/user', (req, res) => {
//     res.render('user')
// })

// FOR DOWNLOAD:
// app.get('/download', (req, res) => {
//     res.download('./files/JS_Learn_Everything.pdf', 'Document.pdf')
// })

// FOR LADY PATH:
// app.get('/download', (req, res) => {
//     res.download('./files/JS_Learn_Everything.pdf')
// })

// FOR ABSOLUTE PATH:
// app.get('/download', (req, res) => {
//     res.sendFile(__dirname + '/files/shortcuts.pdf')
// })

// FOR END METHOD:
// app.get('/about', (req, res) => {
//     res.redirect('..');
// })

// app.get('/end', (req, res) => {
//     res.write('This is testing')
//     res.end()
// })

// FOR ERROR:
// app.get('/error', (req, res) => {
//     res.sendStatus(404)
// })

// SERVER STATUS CODE: 200
// app.get('/error', (req, res) => {
//     res.sendStatus(200)
// })

// STATUS TO MESSAGE SENT:
// app.get('/error', (req, res) => {
//     console.log(res.headersSent)
//     res.status(200).send("Hello")
//     console.log(res.headersSent)
// })

// app.get('/check', (req, res) => {
//     console.log(res.headersSent)
//     res.send("Hello")
//     console.log(res.headersSent)
// })

// FOR SET:
// app.get('/check', (req, res) => {
//     res.set('custom-header', 'hello123')
//     console.log(res.get('custom-header'))
//     res.send("Header Set")
// })
// SERVER STATUS CODES:
// 200 - OK
// 201 - CREATED
// 403 - FORBIDDEN
// 404 - NOT FOUND
// 500 - INTERNAL SERVER ERROR
// 503 - SERVICE UNAVAILABLE
// 504 - GATEWAY TIMEOUT

// EXPRESSJS REQUEST PROPERTIES & METHODS:
// PROPERTIES:
// req.params
// req.query
// req.body
// req.cookies

// for understanding: JSON, form data. send json data. 
// PROPERTIES: RELATED TO ROUTE:
// req.hostname
// req.ip
// req.ips
// req.method
// req.originalUrl
// req.path
// req.protocol
// req.secure
// req.route

// METHODS:
// req.accepts => HTML, JSON, XML
// req.get
// req.is => JSON, form data or plain text
// req.range

// CODE EG:
const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log('Successfully Connected on port 3000.')
})

app.set('view engine', 'ejs')

app.use(express.json()) // for json data use
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {

    res.jsonp({ name: 'Mahnoor', age: 20})
})

// app.post('/about', (req, res) => {
//   res.send(req.body)
// })

// for hostname:
// app.get('/about', (req, res) => {
//     res.send(req.hostname)
// })

// for ip:
// app.get('/about', (req, res) => {
//     res.send(req.ips)
// })

// for method:
// app.get('/about', (req, res) => {
//     res.send(req.method
// })

// for originalUrl:
// app.get('/about', (req, res) => {
//     res.send(req.originalUrl)
// })

// for path:
// app.get('/about', (req, res) => {
//     res.send(req.path) // just return route name
// })

// for protocol:
// app.get('/about', (req, res) => {
//     res.send(req.protocol)
// })

// for secure:
// app.get('/about', (req, res) => {
//     res.send(req.secure)
// })

// for route:
// app.get('/about', (req, res) => {
//     res.send(req.route)
// })

// for userid: route
// app.get('/about/:userid', (req, res) => {
//     res.send(req.route) // for output: type: localhost:3000/about?name=Mahnoor
// })

// for conditions:
// app.get('/about/:userid', (req, res) => {
//     if(req.accepts('html')){
//         res.send("<h1>Hello HTML</h1>")
//     }else if(req.accepts('json')){
//         res.send({ message: 'Hello JSON'})
//     }else if(req.accepts('xml')){
//         res.send("<message>Hello XML</message>")
//     }else{
//         res.send("Content type not supported.")
//     }
// }) // for output: localhost:3000/about/

app.get('/about', (req, res) => {
    res.send(req.headers)
})

app.get('/about', (req, res) => {
    res.send(req.headers.host)
})

app.get('/about', (req, res) => {
    res.send(req.get("Host"))
})

app.get('/about', (req, res) => {
    res.send(req.get("Connection"))
})

app.get('/about', (req, res) => {
    res.send(req.get("Accept"))
})

app.get('/about', (req, res) => {
    if(req.is('application/json')){
        res.send("Valid JSON Data")
    }else if(req.is('text/html')){
        res.send("HTML Data")
    }else{
        res.status(400).send("Unsupported Content-Type.")
    }
})

app.post('/about', (req, res) => {
    if(req.is('application/json')){
        res.send("Valid JSON Data")
    }else if(req.is('text/html')){
        res.send("HTML Data")
    }else{
        res.status(400).send("Unsupported Content-Type.")
    }
})

// WHAT IS EJS TEMPLATE?
// EMBEDDED JAVASCRIPT TEMPLATING
// EJS TEMPLATE => TEMPLATE ENGINE BASED ON JAVASCRIPT
// EJS PROVIDES A CLEAN AND CONVENIENT WAY TO CREATE VIEWS IN EXPRESSJS.
// BENEFITS: CREATE DYNAMIC AND REUSABLE TEMPLATES.

// EJS TEMPLATE TAG SYNTAX:

// | Tag      | Description                      |
// | -------- | -------------------------------- |
// | `<% %>`  | Control flow, no output          |
// | `<%= %>` | Outputs escaped value (safe)     |
// | `<%- %>` | Outputs unescaped value (unsafe) |
// | `<%# %>` | Comment (not shown in output)    |
// | `<% -%>` | Removes the following newline    |
// | `<%_ %>` | Removes whitespace before it     |
// | `<% _%>` | Removes all whitespace after it  |

// Prevents XSS attacks
{/* <ul>
  <% for(let i = 1; i <= 3; i++) { %>
    <li>Item <%= i %></li>
  <% } %>
</ul> */}


{/* <ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul> */}
