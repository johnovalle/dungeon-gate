import Message from './Message';
import Stage from './Stage';
import Renderer from './Renderer';

const message = new Message();
message.show();

const stage = new Stage();
stage.attach(document.body);

const renderer = new Renderer(stage.ctx, stage.canvas);
renderer.draw();
renderer.drawText('Alive', '#00ff00', 100, 300);


