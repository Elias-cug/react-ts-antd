module.exports = {
  types: [
    {
      value: 'feat',
      name: '新功能'
    },
    {
      value: 'fix',
      name: '修复Bug'
    },
    {
      value: 'docs',
      name: '文档完善'
    },
    {
      value: 'style',
      name: '样式变更'
    },
    {
      value: 'refactor',
      name: '重构代码'
    },
    {
      value: 'perf',
      name: '性能优化'
    },
    {
      value: 'test',
      name: '测试'
    },
    {
      value: 'revert',
      name: '代码回退'
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
  skipQuestions: ['body'],

  subjectLimit: 100
};
