import { Test, Expect } from "alsatian";
import FizzBuzz from "../fizz-buzz";

export class FizzBuzzTestFixture {

   @Test()
   public fizzBuzzDoesNotThrowAnError() {
      Expect(FizzBuzz(1, 1)).not.toThrow();
   }
}
