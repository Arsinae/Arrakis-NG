export class ARTableHeader {
  public name: string;
  public display: string;

  constructor(name: string, display: string = name) {
    this.name = name;
    this.display = display;
  }
}

export class ARTableRow {
  public row: Array<{id: string, value: any}> = [];
  public color? = null;

  constructor(){
  }
}
