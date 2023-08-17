// app/Models/ExcelFile.ts
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ExcelFile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public file_path: string

  @column()
  public status: 'Uploaded' | 'In Processing' | 'Processed Fully' | 'Processed Partial' | 'Skipped'

  @column()
  public total_clients: number

  @column()
  public processed_clients: number
}
