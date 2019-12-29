const host = 3000
const io = require( "socket.io")(host)

message = "Hello World"

io.on( "connection" , socket => 
{
	socket.emit( "chat-message", message )
})