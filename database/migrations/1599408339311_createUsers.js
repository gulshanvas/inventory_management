module.exports = {
  'up': 'create table users(' +
    '  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n' +
    '  `name` varchar(10) NOT NULL,\n' +
    '  `username` varchar (10) NOT NULL,\n' +
    '  `password` varchar (256) NOT NULL,\n' +
    '  `created_at` int(11) NOT NULL,\n' +
    '  `updated_at` int(11) NOT NULL,\n' +
    '  PRIMARY KEY (`id`),\n' +
    '  UNIQUE KEY `uk_1` (`username`)\n' +
    ')',
  'down': 'drop table if exists users;'
}