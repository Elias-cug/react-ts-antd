module.exports = {
  disableEmoji: false,
  list: ['feat', 'fix', 'docs', 'refactor', 'style'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'subject', 'body'],
  types: {
    docs: {
      description: '文档完善',
      emoji: '📖',
      value: 'docs'
    },
    feat: {
      description: '新功能',
      emoji: '✨',
      value: 'feat'
    },
    fix: {
      description: '修复Bug',
      emoji: '🐛',
      value: 'fix'
    },
    refactor: {
      description: '重构代码',
      emoji: '🔧',
      value: 'refactor'
    },
    style: {
      description: '样式变更',
      emoji: '💄',
      value: 'style'
    }
  }
};
