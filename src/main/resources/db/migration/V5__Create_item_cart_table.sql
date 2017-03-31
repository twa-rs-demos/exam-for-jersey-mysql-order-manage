create table itemCart (
    itemId int(11) unsigned not null,
    cartId int not null,
    primary key(itemId,cartId),
    foreign key(itemId) references item(id),
    foreign key(cartId) references cart(id) on delete cascade
)ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;