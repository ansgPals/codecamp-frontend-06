import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  // extends BaseEntity 를 해야 확장가능함
  @PrimaryGeneratedColumn("increment") // 넘버면 인크리먼트 아이디면 유유아이디
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;

  // deletedAt: Date
  // // 소프트 딜리트 방식 (실제로 디비에서 지우는게아니라 딜리티드엣 값이 있으면 조회에서 안보이게해놓은다)
}
