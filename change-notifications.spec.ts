import { describe, expect, test } from "@jest/globals";
import { ChangeNotification, NotifyingClass } from "./change-notifications";

describe("change notifications", () => {
  test("works for numeric field", () => {
    const notifyingClass = new NotifyingClass();
    let notification: ChangeNotification | undefined;
    notifyingClass.notifier = (n) => {
      notification = n;
    };

    notifyingClass.numericProperty = 42;

    expect(notification).toEqual({ field: "numericField", value: 42 });
  });

  test("does not notify for numeric field if value is the same", () => {
    const notifyingClass = new NotifyingClass();
    let notification: ChangeNotification | undefined;
    notifyingClass.notifier = (n) => {
      notification = n;
    };

    notifyingClass.numericProperty = 42;
    notifyingClass.numericProperty = 42;

    expect(notification).toEqual({ field: "numericField", value: 42 });
  });

  test("does not fail if notifier for numeric field is not set", () => {
    const notifyingClass = new NotifyingClass();

    notifyingClass.numericProperty = 42;
  });

  test("works for string field", () => {
    const notifyingClass = new NotifyingClass();
    let notification: ChangeNotification | undefined;
    notifyingClass.notifier = (n) => {
      notification = n;
    };

    notifyingClass.stringProperty = "foo";

    expect(notification).toEqual({ field: "stringField", value: "foo" });
  });

  test("does not notify for string field if value is the same", () => {
    const notifyingClass = new NotifyingClass();
    let notification: ChangeNotification | undefined;
    notifyingClass.notifier = (n) => {
      notification = n;
    };

    notifyingClass.stringProperty = "foo";
    notifyingClass.stringProperty = "foo";

    expect(notification).toEqual({ field: "stringField", value: "foo" });
  });

  test("does not fail if notifier for string field is not set", () => {
    const notifyingClass = new NotifyingClass();

    notifyingClass.stringProperty = "foo";
  });
});
