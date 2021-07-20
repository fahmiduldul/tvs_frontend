import { createStore, Store, useStore as baseUseStore } from 'vuex'
import {InjectionKey} from "vue";

export interface State{
  jwt: string;
  authentication: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    jwt:"",
    authentication:false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export function useStore(): Store<State>{
  return baseUseStore(key)
}
