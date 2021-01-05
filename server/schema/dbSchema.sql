DROP TABLE card CASCADE;
DROP TABLE link;
DROP TABLE tag;

CREATE TABLE "card" (
	"_id" serial NOT NULL,
	"card_name" varchar(255) NOT NULL,
	CONSTRAINT "card_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "link" (
	"_id" serial NOT NULL,
	"link_name" varchar(255) NOT NULL,
	"link_src" varchar(255) NOT NULL,
  "card_id" integer NOT NULL,
  "tag_id" integer,
	CONSTRAINT "link_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "tag" (
  "_id" serial NOT NULL,
	"tag_name" varchar(255) NOT NULL,
  "tag_color" varchar(255),
	CONSTRAINT "tag_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "link" ADD CONSTRAINT "link_fk0" FOREIGN KEY ("card_id") REFERENCES "card"("_id");
ALTER TABLE "link" ADD CONSTRAINT "link_fk1" FOREIGN KEY ("tag_id") REFERENCES "tag"("_id");



