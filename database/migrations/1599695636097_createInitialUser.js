const userName = 'testuser';

module.exports = {
  "up": `insert into users(name, username, password, created_at, updated_at) values('gulshan', '${userName}', '12345678', '12313', '123123')`,
  "down": `delete from users where username = '${userName}'`
}