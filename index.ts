

export class SQLGeneratorToolkit {

  public static splitQueryParams(arr: string[], len: number) {
    const a_len = arr.length;
    let result: any[] = [];
    for (let i = 0; i < a_len; i += len) {
      result.push(arr.slice(i, i + len));
    }
    return result;
  }

  public static createQLWhere(column: string, params: string[]) {
    const whereCriteria = params.map((param: string) => `${column}='${param}'`).join(' OR ');
    return whereCriteria === '' ? '' : `where ${whereCriteria}`
  }

  public static createSQLStatements(masterSql: string, criteriaKey: string, params: string[], boxLimit: number): string[] {
    const paramResult = this.splitQueryParams(params, boxLimit);
    const result: string[] = [];
    paramResult.forEach(params => {
      const where = this.createQLWhere(criteriaKey, params);
      result.push(`${masterSql} ${where}`)
    });
    return result;
  }

}