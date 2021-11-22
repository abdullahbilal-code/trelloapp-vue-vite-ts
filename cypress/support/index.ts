import '@4tw/cypress-drag-drop';
import '@cypress/code-coverage/support';
import 'cypress-file-upload';
import 'cypress-real-events/support';
import 'cypress-watch-and-reload/support'
import './commands/getDataCy'

require('cypress-xpath')

beforeEach(() => {

  Cypress.env('boards', []);
  Cypress.env('lists', []);
  Cypress.env('cards', []);
  Cypress.env('users', []);

});
