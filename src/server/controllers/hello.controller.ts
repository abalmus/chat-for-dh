import { Controller, IController, Get } from 'odi';

@Controller()
export class HelloController extends IController {
    @Get index() {
        return "Hello world!";
    }
}
