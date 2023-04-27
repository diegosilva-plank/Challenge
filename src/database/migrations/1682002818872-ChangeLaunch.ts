import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeLaunch1682002818872 implements MigrationInterface {
    name = 'ChangeLaunch1682002818872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "launches" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "launches" ADD "date" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "launches" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "launches" ADD "date" TIMESTAMP NOT NULL`);
    }

}
