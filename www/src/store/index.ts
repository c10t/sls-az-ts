import Vuex from 'vuex';

export interface RootState {}

export default () => new Vuex.Store<RootState>({ modules: {} })
