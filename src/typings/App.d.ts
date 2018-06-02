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
    id: string;
    tileMap: number[];
    objects: any[]; //Player, NPCS, Monsters, Items, Interactive Objects
  }

  interface ObjectGroup {
    [name: string]: ObjectList;
  }

  interface ObjectList {
    [name: string]: Object;
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

  interface Object {
    x: number;
    y: number;
    vel_x: number;
    vel_y: number;
    x_idx: number;
    y_idx: number;
  }

  interface Player extends Object {
    color: '#000';
  }
}


export {}
