import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'excel_files'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('file_path').notNullable()
      table.enum('status', ['Uploaded', 'In Processing', 'Processed Fully', 'Processed Partial', 'Skipped']).notNullable()
      table.integer('total_clients').notNullable()
      table.integer('processed_clients').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
