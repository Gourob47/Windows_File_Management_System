import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import File from 'App/Models/File'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import Folder from 'App/Models/Folder'
export default class FilesController {
  public async store(ctx: HttpContextContract) {
    const req = await ctx.request.validate({
      schema: schema.create({
        image: schema.file({
          size: '5mb',
          extnames: ['jpg', 'png', 'jpeg', 'svg'],
        }),
      }),
      messages: {
        'image.required': 'image field is required',
      },
    })
    const imageName = new Date().getTime().toString() + `.${req.image.extname}`
    await req.image.move(Application.publicPath('images'), {
      name: imageName,
    })

    let folderid = ctx.request.body().id

    if (folderid === 'undefined') {
      const folder = await Folder.create({
        files: `images/${imageName}`,
        fileparent: '1',
      })
      return folder
    } else {
      const folder = await Folder.create({
        files: `images/${imageName}`,
        fileparent: folderid,
      })
      return folder
    }
  }

  public async get(ctx: HttpContextContract) {
    const folderid = ctx.params.key


    const file = await Folder.query().where('fileparent', ctx.params.key)
   
    return file
  }
}
