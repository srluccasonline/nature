"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const chalk_1 = require("chalk");
async function bootstrap() {
    const envConfig = dotenv.config();
    if (envConfig.error) {
        console.log((0, chalk_1.red)("🛑 Error loading '.env' file!"));
        console.log((0, chalk_1.yellow)("💛 Tip: Change the name from '.env.xxx' to '.env' in your directory"));
        throw envConfig.error;
    }
    console.log((0, chalk_1.green)("🔥 Env loaded! \n"));
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map