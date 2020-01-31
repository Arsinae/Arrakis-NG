export class Shadow {
  public x: number = 0;
  public y: number = 0;
  public spread: number = 0;
  public color: string = '#000000ff';
}

export class Gradient {
  public color1: string = '#008080ff';
  public color2: string = '#200080ff';
  public direction: number = 90;
}

export class Theme {
  public primary: string = '#034732ff';
  public secondary: string = '#008258ff';

  public textColor: string = '#000000ff';
  public backgroundColor: string = '#f2f2f2ff';

  public color1: string = '#008080ff';
  public color2: string = '#200080ff';
  public color3: string = '#008040ff';
  public color4: string = '#600080ff';
  public color5: string = '#800000ff';
  public color6: string = '#804000ff';
  public color7: string = '#808000ff';

  public gradient1: Gradient = new Gradient();
  public gradient2: Gradient = new Gradient();
  public gradient3: Gradient = new Gradient();
  public gradient4: Gradient = new Gradient();

  public success: string = '#008040ff';
  public info: string = '#200080ff';
  public danger: string = '#800000ff';
  public warning: string = '#808000ff';

  public padding: number = 6;
  public border: number = 6;

  public smallShadow: Shadow = new Shadow();
  public shadow: Shadow = new Shadow();
  public bigShadow: Shadow = new Shadow();
}