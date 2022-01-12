class Square extends Rectangle{
  readonly name = 'aquare';
  side: number;

  constructor(side:number) {
    super(side, side);
  }
}
