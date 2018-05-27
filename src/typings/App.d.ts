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
  }
  
  interface Message {
    text: string;
    color: string;
    x: number;
    y: number;
  }
}

export {}
