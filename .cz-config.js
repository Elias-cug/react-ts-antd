module.exports = {
  types: [
    {
      value: 'feat',
      name: 'â¨ æ°åè½'
    },
    {
      value: 'fix',
      name: 'ð ä¿®å¤Bug'
    },
    {
      value: 'docs',
      name: 'ð ææ¡£å®å'
    },
    {
      value: 'style',
      name: 'ð æ ·å¼åæ´'
    },
    {
      value: 'refactor',
      name: 'ð§ éæä»£ç '
    }
  ],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'scope', 'footer'],

  subjectLimit: 100
};
