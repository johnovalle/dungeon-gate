export default class Stage {
  private _canvasHeight = 776;
  private _canvasWidth = 576;
  public ctx: CanvasRenderingContext2D;
  public canvas: HTMLCanvasElement;

  constructor() {
    this.canvas = <HTMLCanvasElement> document.createElement('canvas');
    this.ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');

    this.canvas.width = this._canvasWidth;
    this.canvas.height = this._canvasHeight;
    this.canvas.setAttribute('style', 'border: 1px solid red'); // TODO remove
  }

  attach(element: Element): void {
    element.appendChild(this.canvas);
  }
}