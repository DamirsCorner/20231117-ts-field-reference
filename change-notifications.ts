export interface ChangeNotification {
  field: string | number | symbol;
  value: any;
}

export class NotifyingClass {
  public notifier: (notification: ChangeNotification) => void | undefined;

  private numericField: number;

  public set numericProperty(value: number) {
    if (this.numericField === value) return;
    this.numericField = value;
    this.notifier?.({ field: "numericField", value });
  }

  public get numericProperty(): number {
    return this.numericField;
  }

  private stringField: string;

  public set stringProperty(value: string) {
    if (this.stringField === value) return;
    this.stringField = value;
    this.notifier?.({ field: "stringField", value });
  }

  public get stringProperty(): string {
    return this.stringField;
  }
}
