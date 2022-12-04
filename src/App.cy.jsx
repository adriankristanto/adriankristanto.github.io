import App from './App'

describe('<App>', () => {
    it('mounts', () => {
        cy.mount(<App />)
    })
})
