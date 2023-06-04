import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import File from './File'

export default class Folder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public foldername: string

  @column()
  public key: string
  
  @column()
  public files: string
  @column()
  public fileparent: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
}
