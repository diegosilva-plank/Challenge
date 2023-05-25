import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialMigration1681998644908 implements MigrationInterface {
  name = 'InitialMigration1681998644908'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "crewmen" ("id" character varying NOT NULL, "name" character varying NOT NULL, "patent" character varying NOT NULL, CONSTRAINT "PK_d1aa6e3d35a22c5305ed8bee7a3" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "crews" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4316f43ffc0d2bbb0c4c767ba5c" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "rockets" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_31ca8747d519fe8b032d01a1354" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "launches" ("id" character varying NOT NULL, "launch_code" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "success" boolean NOT NULL, "rocket_id" character varying, "crew_id" character varying, CONSTRAINT "PK_70fec2baf57301db60068f44035" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "crews_crewmen_crewmen" ("crewsId" character varying NOT NULL, "crewmenId" character varying NOT NULL, CONSTRAINT "PK_2d1a40da950d492aba10bb58aca" PRIMARY KEY ("crewsId", "crewmenId"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_9b363e311ce51f87ca6867af72" ON "crews_crewmen_crewmen" ("crewsId") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_b19bc5ea56f77892575781379e" ON "crews_crewmen_crewmen" ("crewmenId") `
    )
    await queryRunner.query(
      `ALTER TABLE "launches" ADD CONSTRAINT "FK_5892dadd81305bf58074114626a" FOREIGN KEY ("rocket_id") REFERENCES "rockets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "launches" ADD CONSTRAINT "FK_c4b7bf1fb3016521e0b849fdd19" FOREIGN KEY ("crew_id") REFERENCES "crews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "crews_crewmen_crewmen" ADD CONSTRAINT "FK_9b363e311ce51f87ca6867af72c" FOREIGN KEY ("crewsId") REFERENCES "crews"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "crews_crewmen_crewmen" ADD CONSTRAINT "FK_b19bc5ea56f77892575781379e3" FOREIGN KEY ("crewmenId") REFERENCES "crewmen"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "crews_crewmen_crewmen" DROP CONSTRAINT "FK_b19bc5ea56f77892575781379e3"`
    )
    await queryRunner.query(
      `ALTER TABLE "crews_crewmen_crewmen" DROP CONSTRAINT "FK_9b363e311ce51f87ca6867af72c"`
    )
    await queryRunner.query(
      `ALTER TABLE "launches" DROP CONSTRAINT "FK_c4b7bf1fb3016521e0b849fdd19"`
    )
    await queryRunner.query(
      `ALTER TABLE "launches" DROP CONSTRAINT "FK_5892dadd81305bf58074114626a"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b19bc5ea56f77892575781379e"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_9b363e311ce51f87ca6867af72"`
    )
    await queryRunner.query(`DROP TABLE "crews_crewmen_crewmen"`)
    await queryRunner.query(`DROP TABLE "launches"`)
    await queryRunner.query(`DROP TABLE "rockets"`)
    await queryRunner.query(`DROP TABLE "crews"`)
    await queryRunner.query(`DROP TABLE "crewmen"`)
  }
}
