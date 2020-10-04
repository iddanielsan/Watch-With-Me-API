'use strict'

const md5 = use('crypto')
const Room = use('App/Models/Room')

class RoomController {
	async new({ response, request }){
		try {
			const { username } = request.body

			const roomChannel = md5.createHash('md5').update(`DELTA-${Date.now()}-${username}`).digest("hex")
			const roomCode = Math.random().toString(36).substr(2, 5).toUpperCase()

			const CreateRoom = await Room.create({
        room_code: roomCode,
        room_channel: roomChannel,
        username: username
      })

      response.status(201).send({
      	success: true,
      	channel: roomChannel,
      	code: roomCode,
      	username: username
      })
		} catch(e) {
			response.status(500).send({
				success: false
			})
		}
	}

	async enter({ response, request }) {
		try {
			const { code } = request.get()
			const getRoom = await Room.where({ room_code: code }).first()

			response.status(200).send({
      	success: true,
      	data: getRoom,
      })
		} catch(e) {
			response.status(500).send({
				success: false
			})
		}
	}
}

module.exports = RoomController
