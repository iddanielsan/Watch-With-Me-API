'use strict'

class RoomController {
  constructor ({ socket, request }) {
  	console.log(socket);
    this.socket = socket
    this.request = request
  }

  onMessage (message) {
  	if(message.action === "send_video_action"){
  		this.socket.broadcast('video_action', message)
  	}
  	// if (message.action === 'room:play') {
  	// 	
  	// }

  	// console.log(message);
    // this.socket.broadcastToAll('message', message)
  }
}

module.exports = RoomController
