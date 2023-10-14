import { App } from 'vue'
import DemoComp from './DemoComp.vue'

export {DemoComp}

export default {
  install(app:App){
    app.component(DemoComp.name, DemoComp)
  }
}