export class ARAlert {
  type = 'danger';
  title = '';
  text = '';
  timer: number = null;

  constructor(type: string, title: string, text: string, timer?: number) {
    this.type = type;
    this.title = title;
    this.text = text;
    this.timer = (timer) ? timer : null;
  }
}