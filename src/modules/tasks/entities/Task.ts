import { randomUUID } from 'crypto';

import { Description } from '@tasks/entities/Description';
import { Title } from '@tasks/entities/Title';

import { Replace } from '@helpers/Replace';

export interface TaskProps {
  title: Title;
  description: Description;
  completed?: boolean | null;
  // dueDate?: Date | null;
  createdAt: Date;
}

export class Task {
  private _id: string;
  private props: TaskProps;

  constructor(props: Replace<TaskProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      completed: props.completed ?? false,
    };
  }

  public get id() {
    return this._id;
  }

  public set title(title: Title) {
    this.props.title = title;
  }

  public get title(): Title {
    return this.props.title;
  }

  public get description(): Description {
    return this.props.description;
  }

  public set description(description: Description) {
    this.props.description = description;
  }

  public get completed() {
    return this.props.completed;
  }

  public completedTask() {
    this.props.completed = true;
  }

  // public get dueDate() {
  //   return this.props.dueDate;
  // }

  // public set dueDate(dueDate: Date | null | undefined) {
  //   this.props.dueDate = dueDate;
  // }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
