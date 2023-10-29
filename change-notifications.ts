export interface ChangeNotification {
  field: string | number | symbol;
  value: any;
}

export class NotifyingClass {
  public notifier: (notification: ChangeNotification) => void | undefined;

  public numericField: number;

  public set numericProperty(value: number) {
    this.setValueWithNotification("numericField", value);
  }

  public get numericProperty(): number {
    return this.numericField;
  }

  public stringField: string;

  public set stringProperty(value: string) {
    this.setValueWithNotification("stringField", value);
  }

  public get stringProperty(): string {
    return this.stringField;
  }

  private setValueWithNotification<K extends keyof this>(
    field: K,
    value: this[K]
  ) {
    if (this[field] === value) return;
    this[field] = value;
    this.notifier?.({ field, value });
  }
}
