export default class Canvas {
  private _canvasHeight = 776;
  private _canvasWidth = 576;
  public context: CanvasRenderingContext2D;
  public canvas: HTMLCanvasElement;

  constructor() {
    this.canvas = <HTMLCanvasElement> document.createElement('canvas');
    this.context = <CanvasRenderingContext2D> this.canvas.getContext('2d');

    this.canvas.height = this._canvasHeight;
    this.canvas.width = this._canvasWidth;
    this.canvas.setAttribute('style', 'border: 1px solid red'); // TODO remove
  }

  attach(element: Element): void {
    element.appendChild(this.canvas);
  }
}