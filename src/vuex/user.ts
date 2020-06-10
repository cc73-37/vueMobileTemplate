import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from './index'

// 动态注册模块
@Module({ dynamic: true, store: store, name: 'user', namespaced: true })
class UserModule extends VuexModule {
  token = 'token from server'

  @Mutation
  setToken(token: string) {
    this.token = token
  }

  @Action
  login(userInfo: {username: string, password: string}) {
    setTimeout(() => {
      this.setToken('blabla')
    }, 1000);
  }

}

export default getModule(UserModule)