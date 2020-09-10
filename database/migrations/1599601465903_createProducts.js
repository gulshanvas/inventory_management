module.exports = {
  'up': 'create table products(' +
    '  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n' +
    '  `name` varchar(10) NOT NULL,\n' +
    '  `price` bigint(10) NOT NULL,\n' +
    '  `company_name` varchar(10) NOT NULL,\n' +
    '  `count` bigint(10) NOT NULL,\n' +
    '  `status` tinyint(10) NOT NULL,\n' +
    '  `created_at` int(11) NOT NULL,\n' +
    '  `updated_at` int(11) NOT NULL,\n' +
    '  PRIMARY KEY (`id`),\n' +
    '  UNIQUE KEY `uk_1` (`name`)\n' +
    ')',
    'down': 'drop table if exists products;'
}