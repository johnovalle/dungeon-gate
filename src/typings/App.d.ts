declare global {
  interface Window { [name: string]: any; }

  interface Action {
    type: string;
    payload: any;
  }
  
  interface SceneList {
    [name: string]: Scene;
  }
  
  interface Scene {
    background: string;
    messages: Message[];
    keyMap: KeyMap;
  }

  interface KeyMap {
    [name: string]: string;
  }
  
  interface Message {
    text: string;
    color: string;
    x: number;
    y: number;
  }
}


export {}
