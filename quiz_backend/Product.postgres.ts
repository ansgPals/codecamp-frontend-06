import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class Product extends BaseEntity {
  // extends BaseEntity 를 해야 확장가능함
  @PrimaryGeneratedColumn("uuid") // 넘버면 인크리먼트 아이디면 유유아이디
  id!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @DeleteDateColumn({ type: "timestamp" })
  deletedAt?: Date;

  // 소프트 딜리트 방식 (실제로 디비에서 지우는게아니라 딜리티드엣 값이 있으면 조회에서 안보이게해놓은다)
}
