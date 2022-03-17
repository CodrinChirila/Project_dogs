create table breeds (
	id UUID NOT NULL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	temperament VARCHAR(255) NOT NULL,
	life_span VARCHAR(50) NOT NULL,
	alt_names VARCHAR(7),
	wikiperdia_url VARCHAR(150),
	origin VARCHAR(100),
	country_code VARCHAR(10)
);