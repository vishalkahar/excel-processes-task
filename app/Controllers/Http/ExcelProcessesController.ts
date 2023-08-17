import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import ExcelProcessor from 'your-excel-processor-library' // Replace with your actual library

export default class ExcelProcessesController {
  public async uploadFile({ request }: HttpContextContract) {
    // Handle file upload
    const file = request.file('excelFile')

    // Process the uploaded file using your ExcelProcessor library
    const processingResult = await ExcelProcessor.processFile(file.tmpPath)

    // Determine the file status and update the database accordingly
    const { totalCount, processedCount } = processingResult
    let status = 'Uploaded'

    if (processedCount === totalCount) {
      status = 'Processed Fully'
    } else if (processedCount > 0) {
      status = 'Processed Partial'
    } else {
      status = 'Skipped'
    }

    await Database.table('excel_files').insert({
      file_path: file.tmpPath,
      status,
      total_clients: totalCount,
      processed_clients: processedCount,
    })

    return { message: 'File uploaded and processed successfully.' }
  }
}
