import Editor from '../../../src/editor'

describe('菜单-行处理', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/canvas-editor/')

    cy.get('canvas').first().as('canvas').should('have.length', 1)
  })

  const text = 'canvas-editor'

  it('左对齐', () => {
    cy.getEditor().then((editor: Editor) => {
      editor.listener.saved = function (payload) {
        const data = payload.data

        expect(data[0].rowFlex).to.eq('left')
      }

      editor.command.executeSelectAll()

      editor.command.executeBackspace()

      editor.command.executeInsertElementList([{
        value: text
      }])

      cy.get('.menu-item__left')
        .click()
        .then(() => {
          cy.get('@canvas').type('{ctrl}s')
        })
    })
  })

  it('居中对齐', () => {
    cy.getEditor().then((editor: Editor) => {
      editor.listener.saved = function (payload) {
        const data = payload.data

        expect(data[0].rowFlex).to.eq('center')
      }

      editor.command.executeSelectAll()

      editor.command.executeBackspace()

      editor.command.executeInsertElementList([{
        value: text
      }])

      cy.get('.menu-item__center')
        .click()
        .then(() => {
          cy.get('@canvas').type('{ctrl}s')
        })
    })
  })

  it('靠右对齐', () => {
    cy.getEditor().then((editor: Editor) => {
      editor.listener.saved = function (payload) {
        const data = payload.data

        expect(data[0].rowFlex).to.eq('right')
      }

      editor.command.executeSelectAll()

      editor.command.executeBackspace()

      editor.command.executeInsertElementList([{
        value: text
      }])

      cy.get('.menu-item__right')
        .click()
        .then(() => {
          cy.get('@canvas').type('{ctrl}s')
        })
    })
  })

  it('行间距', () => {
    cy.getEditor().then((editor: Editor) => {
      editor.listener.saved = function (payload) {
        const data = payload.data

        expect(data[0].rowMargin).to.eq(1.25)
      }

      editor.command.executeSelectAll()

      editor.command.executeBackspace()

      editor.command.executeInsertElementList([{
        value: text
      }])

      cy.get('.menu-item__row-margin').as('rowMargin').click()

      cy.get('@rowMargin').find('li').eq(1).click()

      cy.get('@canvas').type('{ctrl}s')
    })
  })

})
