declare global {
  interface Window { [name: string]: any; }

  interface Action {
    type: string;
    payload: any;
  }
  
  interface SceneList {
    [name: string]: Scene;
  }

  interface KeyMap {
    [name: string]: string;
  }
  
  interface Scene {
    background: string;
    messages: Message[];
    keyMap: KeyMap;
    hasTileMap: boolean;
  }

  interface LevelList {
    [name: string]: Level | null;
  }
  
  interface Level {
    tileMap: number[];
    objects: any[]; //Player, NPCS, Monsters, Items, Interactive Objects
  }
  
  interface Message {
    text: string;
    color: string;
    x: number;
    y: number;
  }

  interface TestMap {
    mapCols: number;
    mapRows: number;
    isBG: boolean;
    grid: number[];
  }
}


export {}
