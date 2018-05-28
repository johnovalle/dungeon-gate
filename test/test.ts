import chai from 'chai';

const expect = chai.expect;

import store from '../src/Store';
import { changeScene } from '../src/actions/sceneActions';



describe('store', () => {
  
  describe('scenes', () => {

    it('should be initialized to booting', () => {
      const scenes = store.getState().scenes;
      expect(scenes.current).to.be.equal(scenes.booting);
    });
  
    it('should change scene', () => {
      const target = 'loading';
      store.dispatch(changeScene(target));
      const scenes = store.getState().scenes;
      expect(scenes.current).to.be.equal(scenes[target]);
    });
  });

});