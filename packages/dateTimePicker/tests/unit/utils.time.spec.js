import {getTimeObjectFromDate} from "@/lib/time";

describe("./utils/time", () => {
  it("should return Object {hh,mm,A} getTimeObjectFromDate", () => {
    const foo = new Date('2018-08-21T13:34')
    expect(getTimeObjectFromDate(foo).hh).toBe("01");
    expect(getTimeObjectFromDate(foo).mm).toBe("34");
    expect(getTimeObjectFromDate(foo).A).toBe("PM");
  });

  it("should have {} when given null getTimeObjectFromDate", () => {
    expect(getTimeObjectFromDate()).toEqual(null);
  });
});
