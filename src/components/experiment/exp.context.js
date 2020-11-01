const StoreContext = React.createContext()


<StoreContext.Provider value={store}>
    <App />
</StoreContext.Provider>




<StoreContext.Consumer>
    {(store) => {
        // some code
        const state = store.getState()
    }}
</StoreContext.Consumer>