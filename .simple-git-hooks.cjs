module.exports = {
  "pre-commit":
    "echo && echo '--------------------' && echo 'staged files:' &&  git diff --name-only --cached && echo '--------------------' && pnpm lint-staged",
  "commit-msg": "node scripts/verifyCommit.js",
};
