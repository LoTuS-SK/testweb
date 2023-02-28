create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surename VARCHAR(255)
);

create TABLE Post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    id_user INTEGER,
    FOREIGN KEY (id_user) REFERENCES person(id)

);
