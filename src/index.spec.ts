import { hello } from "."

describe("hello function", () => {
  it("says hi me", () => {
    expect(hello("me")).toEqual("Hello, me")
  })
})