import { Test, Expect } from "alsatian";
import StringCalculator from "../string-calculator";

export class StringCalculatorTestFixture {

   @Test()
   public fizzBuzzDoesNotThrowAnError() {
      let stringCalculator = new StringCalculator();

      Expect(stringCalculator.calculate("1 + 1")).not.toThrow();
   }
}
