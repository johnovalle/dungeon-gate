import store from './Store';

export default class Renderer {
  private _currentScene: Scene;

  constructor(private _ctx: CanvasRenderingContext2D, private _canvas: HTMLCanvasElement) {
    this._currentScene = store.getState().scenes.current;
    store.subscribe(() => {
      // console.log('store changed', store.getState());
      this._currentScene = store.getState().scenes.current;
      console.log('render', this._currentScene);
      this.draw();
    });
  }

  public draw(): void {
    if (this._currentScene) {
      this._drawBackground();
    }
  }

  private _drawBackground(): void {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx.fillStyle = this._currentScene.background;
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  private _drawText(text: string, color: string, x: number, y: number): void {
    this._ctx.fillStyle = color;
    this._ctx.font = '20px Helvetica';
    this._ctx.fillText(text, x, y);
  }
}