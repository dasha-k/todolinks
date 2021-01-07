DROP TABLE link CASCADE;
DROP TABLE tag;

CREATE TABLE "link" (
	"_id" serial NOT NULL,
	"link_name" varchar(255) NOT NULL,
	"link_src" varchar(255) NOT NULL,
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

ALTER TABLE "link" ADD CONSTRAINT "link_fk0" FOREIGN KEY ("tag_id") REFERENCES "tag"("_id");



