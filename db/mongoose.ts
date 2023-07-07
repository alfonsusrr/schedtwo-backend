import {connect } from 'mongoose'

const dbConnect = async () => {
    const connectionURL: string = process.env.MONGODB_URL ? process.env.MONGODB_URL : ""
    if (connectionURL == "") {
        console.error("Error: Empty database URL")
        return
    } else {
        connect(connectionURL)
    }
}

module.exports = dbConnect