
describe('Validate Form Elements', function () {
    beforeEach(function () {
      cy.visit('http://127.0.0.1:3000/')
      cy.fixture('test_data.json').as('data')
      });

    it('Typeface class checkboxes', function () {
        cy.get('@data').then((data) => {
          const class_names = data.checkboxes.classes.names.join(',').replace(/,/g,'')
          const class_values = data.checkboxes.classes.values.join(',').replace(/,/g,'')
          var values = ''
          cy.get('h1')
            .should('have.text', 'Typeface Image Generator')
        
          cy.get('.classes')
            .as('checkboxes')
            .check()
          
          cy.get('@checkboxes')
            .each(checkbox => {
              expect(class_values.includes(checkbox[0].value)).to.equal(true)
            })
          
        })
      })

})