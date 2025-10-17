import fs from "fs";
import { parse } from "csv-parse/sync";

export class DataProvider {
  /**
   *
   * @param filePath
   * @returns return data from JSON
   * Since we set it as Static we can call the methods directly just by using classname. No need to create Objects to call the methods. 
   */
  static getTestDataFromJson(filePath: string) {
    let data: any = JSON.parse(fs.readFileSync(filePath, "utf8")); // reading data
    return data;
  }

  /**
   *
   * @param filePath
   * @returns return data from CSV
   */

  static getTestDataFromCsv(filePath: string) {
    let data: any = parse(fs.readFileSync(filePath), {
      columns: true,
      skip_empty_lines: true,
    });
    return data;
  }
}
