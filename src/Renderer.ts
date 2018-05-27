export default class Renderer {

  constructor(private _ctx: CanvasRenderingContext2D, private _canvas: HTMLCanvasElement) {
    
  }

  draw(): void {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx.fillStyle = '#ff0066';
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  drawText(text: string, color: string, x: number, y: number): void {
    this._ctx.fillStyle = color;
    this._ctx.font = '20px Helvetica';
    this._ctx.fillText(text, x, y);
  }
}