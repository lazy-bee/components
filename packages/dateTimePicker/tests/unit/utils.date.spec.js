import date from "@/lib/date";

describe("./utils/date", () => {
  it("should have function date.daysInMonth", () => {
    expect(typeof date.daysInMonth).toBe("function");
  });
});

describe("date.daysInMonth", () => {
  it("shoud return 29 for 2000/02", () => {
    const feb = 1;
    expect(date.daysInMonth(2000, feb)).toBe(29);
  });

  it("shoud return 31 for 2000/01", () => {
    const jau = 0;
    expect(date.daysInMonth(2000, jau)).toBe(31);
  });
});

describe("date.getWeekday", () => {
  it("shoud return number result by given format in string", () => {
    expect(date.getWeekday("December 25, 2018 00:15:00")).toBe(2);
  });
  it("shoud return number result by given format in number(timestamp)", () => {
    expect(date.getWeekday(1545668100000)).toBe(2);
  });

  it("shoud return -1 when given null", () => {
    expect(date.getWeekday()).toBe(-1);
  });
});

describe("date.getWeekday isStringResult=frue", () => {
  it("shoud return string result by given format in string", () => {
    expect(date.getWeekday("December 25, 2018 00:15:00", true)).toBe("Tuesday");
  });
  it("shoud return string result by given format in number(timestamp)", () => {
    expect(date.getWeekday(1545668100000, true)).toBe("Tuesday");
  });

  it("shoud return '' when given null", () => {
    expect(date.getWeekday(null, true)).toBe("");
  });
});

describe("date.format", () => {
  it("should return default format in yy-mm-dd", () => {
    expect(date.format(new Date("2017-12-03"))).toBe("2017-12-03");
  });

  it("should return given format in yy-mm-dd", () => {
    expect(date.format(new Date("2017-12-03"), "yy-mm-dd")).toBe("2017-12-03");
  });
});
