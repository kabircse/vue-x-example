Vuex Guide:

Vuex has store in:
  store/index.js:
User Module loaded to main store from '../store/modules/users-module'

Store format:
  export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      UsersModule
    }
  })

Notes:

1. state: 
  Vuex manages a single state tree – this single object includes all your application-level state and serves as the “single source of truth”. Only one store for each application.

2. getters: 
  Vuex allows us to define “getters” in the store. They work as a computed property for stores. The same computed properties, a getter’s outcome is cached based on its dependencies.

3. actions: 
  The action handlers are used to make API calls, used to perform the CRUD operations to manage the data for the Vuex store.

4. mutations: 
  mutating the state of the store object. Update state in a Vuex store is by performing a mutation. Vuex mutations are related to events: each mutation has a string type and a handler.


store map methods:
1. mapGetters: 
   mapGetters is a helper, formulate a computed property to displays the value returned by an assigned getter.

2. mapActions: 
   mapActions is a helper, defining a method as calling dispatch on an action.

3. mapMutations: 
   mapMutations is a helper, create a method as calling commit on a mutation.
