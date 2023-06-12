import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "Hello World!";
  }

  @Get("/bye")
  getRootRoute2() {
    return "Goodbye World!";
  }
}
