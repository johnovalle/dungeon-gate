import store from './Store';

export default class Renderer {
  private _currentScene: Scene;
  private _tileSize = 16;
  private _cols = 27;
  private _rows = 27;
  private _currentLevel: Level | null;
  private _currentObjects: ObjectList = {};

  constructor(private _ctx: CanvasRenderingContext2D, private _canvas: HTMLCanvasElement) {
    let state: any = store.getState();
    this._currentScene = state.scenes.current;
    this._currentLevel = state.levels.current;
    
    
    store.subscribe(() => {
      state = store.getState();
      this._currentScene = state.scenes.current;
      this._currentLevel = state.levels.current;
      if (this._currentLevel) {
        this._currentObjects = state.objects[this._currentLevel.id];
      }
      this.draw();
    });
  }

  public draw(): void {
    if (this._currentScene) {
      this._drawBackground();
      if (this._currentScene.hasTileMap && this._currentLevel) {
        this._drawMap(this._currentLevel.tileMap);
        this._drawObjects();
      }
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

  private _drawMap(map: number[]/*, viewport*/): void { //check viewport here and only draw what's in the viewport
    for(let i = 0, len = map.length;  i < len; i++){
        let tile = map[i];
      //if(viewport.indexOf(i) !== -1 && (tile !== 0 || map.isBG)){
        let x = (i % this._cols) * this._tileSize; // index / width of drawing area in tiles * tile size
        let y = Math.floor(i / this._cols) * this._tileSize;
        if (tile === 0) {
          this._ctx.fillStyle = '#fff0fe';
        } else if (tile === 1) {
          this._ctx.fillStyle = '#fff0f1';
        } else if (tile === 2) {
          this._ctx.fillStyle = '#f0fffc';
        } else if (tile === 3) {
          this._ctx.fillStyle = '#f6fff0';
        } else if (tile === 4) {
          this._ctx.fillStyle = '#fffbf0';
        }
        this._ctx.fillRect(x, y, this._tileSize, this._tileSize);
        // let sx = (tile % spritesheet.sheetCols) * spritesheet.tileSize // tile value against width of tilesheet in tiles * tile size on sheet
        // let sy = Math.floor(tile / spritesheet.sheetCols) * spritesheet.tileSize;
        // this._ctx.drawImage(spritesheet.sheet, sx, sy, spritesheet.tileSize, spritesheet.tileSize,
        //                                 x, y, Config.tileSize + 1, Config.tileSize + 1);
      //}
    }
  }

  private _drawObjects(): void {
    for (const key in this._currentObjects) {
      let player = this._currentObjects[key];
      this._ctx.fillStyle = player.color;
      this._ctx.fillRect(player.x, player.y, this._tileSize, this._tileSize);
    }
    
  }
}