module.exports = {
  upgrade: true,
  workspaces: true,
  root: true,
  reject: name => name.startsWith('@placeholder'),
}
