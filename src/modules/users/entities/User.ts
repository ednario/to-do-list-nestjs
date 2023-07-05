import { randomUUID } from 'crypto';

import { Replace } from '@helpers/Replace';

export interface UserProps {
  name: string;
  createdAt: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: Replace<UserProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name == name;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
