

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class Admin {
  public async handle ({ auth, response }: HttpContextContract, next: () => Promise<void>) {



   const user= await auth.authenticate();

    if (user.role=='user') {
     
      return response.status(403).json({
        status: 'error',
        message: 'You do not have permission to access this resource.',
      })
    }

 
    await next()
  }
}
