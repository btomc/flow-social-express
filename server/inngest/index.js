import { Inngest } from 'inngest'
import User from '../models/User.js'

// Create a client to send and receive events
export const inngest = new Inngest({ id: 'flow-app' })

// Create an empty array where we'll export future Inngest functions
export const functions = []
