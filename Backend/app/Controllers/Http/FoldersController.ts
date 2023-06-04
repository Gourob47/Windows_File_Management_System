import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Folder from 'App/Models/Folder'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
export default class FoldersController {
  public async store(ctx: HttpContextContract) {
    const foldername = ctx.request.body().foldername
    const key = ctx.request.body().key
    const path = ctx.request.body().pa

    const folder = await Folder.create({
      foldername: foldername,
      key: key,
    })
    return folder
  }
  public async get(ctx: HttpContextContract) {
    let path: any[] = []
    let name: any[] = []

    const s = ctx.params.key;
    path.push(s)

    const folder = await Folder.query().where('key', s);
    const file= await Folder.query().where('fileparent',s);
    
    if (s == 1) {
     const name=['root'];
      return { folder, path,name,file }
    }
    const folders = await Folder.findByOrFail('id', s)
    let s1 = folders.$attributes.key
    let n1 = folders.$attributes.foldername
    if (s != s1) {
      path.push(s1);
      name.push(n1);
    }
    while (s1 > 1) {
      const folders = await Folder.findByOrFail('id', s1)
      s1 = folders.$attributes.key
      let n1 = folders.$attributes.foldername
      path.push(s1)
      name.push(n1)
    }
    name.push('root');
    path.reverse();
    name.reverse();
    return { folder, path, name, file }
  }

  public async edit(ctx: HttpContextContract) {
    const req = await ctx.request.validate({
      schema: schema.create({
        foldername: schema.string({}),
      }),
    })

    const folder = await Folder.findOrFail(ctx.request.body().id)

    folder.foldername = req.foldername
    await folder.save()
    return folder
  }

  public async delete(ctx: HttpContextContract) {
    const folder = await Folder.findOrFail(ctx.request.body().id)

    await folder.delete()
    return folder
  }
}
